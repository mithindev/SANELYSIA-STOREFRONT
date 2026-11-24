import 'server-only';
import { env } from '@/lib/env';
import {
  ApiResponse,
  StorefrontInfoDTO,
  CatalogProductDTO,
  ProductDetailDTO,
  CartDTO,
} from './contracts/storefront';
import { StorefrontApiError } from './errors';

interface ClientOptions {
  timeoutMs?: number;
  sessionToken?: string;
  cache?: RequestCache;
  revalidate?: number | false;
  tags?: string[];
}

export class StorefrontBackendClient {
  private readonly baseUrl: string;
  private readonly publishableKey: string;

  constructor(baseUrl?: string, publishableKey?: string) {
    this.baseUrl = (baseUrl || env.NEXT_PUBLIC_STOREFRONT_API_URL).replace(/\/$/, '');
    this.publishableKey = publishableKey || env.NEXT_PUBLIC_STOREFRONT_KEY;
  }

  private async request<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'DELETE' = 'GET',
    body?: unknown,
    options: ClientOptions = {}
  ): Promise<ApiResponse<T>> {
    const { timeoutMs = 8000, sessionToken, cache = 'default', revalidate, tags } = options;
    const url = `${this.baseUrl}${endpoint}`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'x-publishable-key': this.publishableKey,
    };

    if (sessionToken) {
      headers['x-session-token'] = sessionToken;
    }

    const controller = new AbortController();
    const timeoutTimer = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const fetchOptions: RequestInit & { next?: { revalidate?: number | false; tags?: string[] } } = {
        method,
        headers,
        signal: controller.signal,
        cache: revalidate !== undefined ? undefined : cache,
      };

      if (revalidate !== undefined || tags) {
        fetchOptions.next = {
          revalidate,
          tags,
        };
      }

      if (body !== undefined && method !== 'GET') {
        fetchOptions.body = JSON.stringify(body);
      }

      const response = await fetch(url, fetchOptions);
      clearTimeout(timeoutTimer);

      const json = await response.json().catch(() => null);

      if (!response.ok || !json?.success) {
        throw StorefrontApiError.fromResponse(response.status, json);
      }

      return json as ApiResponse<T>;
    } catch (err: unknown) {
      clearTimeout(timeoutTimer);

      if (err instanceof StorefrontApiError) {
        throw err;
      }

      if (err instanceof Error && err.name === 'AbortError') {
        throw StorefrontApiError.timeout();
      }

      throw StorefrontApiError.networkError(err);
    }
  }

  /**
   * Fetches storefront branding, metadata and announcement banner
   */
  async getStoreInfo(options: ClientOptions = {}): Promise<StorefrontInfoDTO> {
    const res = await this.request<StorefrontInfoDTO>(
      '/api/v1/storefront/info',
      'GET',
      undefined,
      { revalidate: 3600, tags: ['storefront-info'], ...options }
    );
    return res.data;
  }

  /**
   * Fetches public catalog products with live stock
   */
  async getCatalog(
    params: {
      query?: string;
      category?: string;
      badge?: string;
      sort?: string;
      page?: number;
      limit?: number;
    } = {},
    options: ClientOptions = {}
  ): Promise<ApiResponse<CatalogProductDTO[]>> {
    const searchParams = new URLSearchParams();
    if (params.query) searchParams.set('query', params.query);
    if (params.category) searchParams.set('category', params.category);
    if (params.badge) searchParams.set('badge', params.badge);
    if (params.sort) searchParams.set('sort', params.sort);
    if (params.page) searchParams.set('page', String(params.page));
    if (params.limit) searchParams.set('limit', String(params.limit));

    const qs = searchParams.toString();
    const endpoint = `/api/v1/storefront/catalog${qs ? `?${qs}` : ''}`;

    return this.request<CatalogProductDTO[]>(endpoint, 'GET', undefined, {
      revalidate: 60,
      tags: ['catalog'],
      ...options,
    });
  }

  /**
   * Fetches detailed PDP information by slug
   */
  async getProductBySlug(slug: string, options: ClientOptions = {}): Promise<ProductDetailDTO> {
    const res = await this.request<ProductDetailDTO>(
      `/api/v1/storefront/products/${encodeURIComponent(slug)}`,
      'GET',
      undefined,
      { revalidate: 60, tags: [`product-${slug}`], ...options }
    );
    return res.data;
  }

  /**
   * Fetches current session cart
   */
  async getCart(sessionToken: string, options: ClientOptions = {}): Promise<CartDTO> {
    const res = await this.request<CartDTO>(
      '/api/v1/storefront/cart',
      'GET',
      undefined,
      { cache: 'no-store', sessionToken, ...options }
    );
    return res.data;
  }
}

// Global server-only singleton instance
export const backendClient = new StorefrontBackendClient();
