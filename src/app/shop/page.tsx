import { CatalogView } from '@/features/catalog/catalog-view';

interface ShopPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const { category = 'all' } = await searchParams;

  return <CatalogView initialCategory={category} />;
}
