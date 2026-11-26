import { notFound } from 'next/navigation';
import { catalogProducts } from '@/data/catalog';
import { ProductDetailView } from '@/features/product/product-detail-view';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return catalogProducts.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = catalogProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
