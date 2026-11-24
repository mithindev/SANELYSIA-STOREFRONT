import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_STOREFRONT_API_URL: z
    .string()
    .url()
    .default('http://localhost:5098'),
  NEXT_PUBLIC_STOREFRONT_KEY: z
    .string()
    .min(1)
    .default('pk_test_sanelysia_storefront_live'),
  NEXT_PUBLIC_TENANT_ID: z
    .string()
    .default('sanelysia'),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_STOREFRONT_API_URL: process.env.NEXT_PUBLIC_STOREFRONT_API_URL,
  NEXT_PUBLIC_STOREFRONT_KEY: process.env.NEXT_PUBLIC_STOREFRONT_KEY,
  NEXT_PUBLIC_TENANT_ID: process.env.NEXT_PUBLIC_TENANT_ID,
});
