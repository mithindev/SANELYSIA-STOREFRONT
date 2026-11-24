export type StorefrontErrorCode =
  | 'STOREFRONT_KEY_REQUIRED'
  | 'STOREFRONT_KEY_INVALID'
  | 'STOREFRONT_ORIGIN_UNAUTHORIZED'
  | 'MODULE_NOT_DOCKED'
  | 'RATE_LIMIT_EXCEEDED'
  | 'VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'OUT_OF_STOCK'
  | 'CART_EXPIRED'
  | 'NETWORK_ERROR'
  | 'TIMEOUT_ERROR'
  | 'INTERNAL_ERROR';

export class StorefrontApiError extends Error {
  public readonly code: StorefrontErrorCode;
  public readonly status: number;
  public readonly details?: unknown;

  constructor(message: string, code: StorefrontErrorCode = 'INTERNAL_ERROR', status = 500, details?: unknown) {
    super(message);
    this.name = 'StorefrontApiError';
    this.code = code;
    this.status = status;
    this.details = details;
    Object.setPrototypeOf(this, StorefrontApiError.prototype);
  }

  static fromResponse(status: number, json: any): StorefrontApiError {
    const code = (json?.error as StorefrontErrorCode) || 'INTERNAL_ERROR';
    const message = json?.message || `Storefront API request failed with status ${status}`;
    return new StorefrontApiError(message, code, status, json);
  }

  static networkError(originalError: unknown): StorefrontApiError {
    const message = originalError instanceof Error ? originalError.message : 'Network connectivity error';
    return new StorefrontApiError(message, 'NETWORK_ERROR', 0, originalError);
  }

  static timeout(): StorefrontApiError {
    return new StorefrontApiError('Request timed out while contacting commerce backend', 'TIMEOUT_ERROR', 408);
  }
}
