import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check, Leaf } from 'lucide-react';
import { ingredients } from '@/data/ingredients';
import { catalogProducts } from '@/data/catalog';
import { ProductCard } from '@/components/ui/product-card';

interface IngredientDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ingredients.map((i) => ({ slug: i.slug }));
}

export default async function IngredientDetailPage({ params }: IngredientDetailPageProps) {
  const { slug } = await params;
  const ingredient = ingredients.find((i) => i.slug === slug);

  if (!ingredient) {
    notFound();
  }

  // Find products that contain this ingredient
  const relatedProducts = catalogProducts.filter((p) =>
    ingredient.foundIn.some((title) => p.title.toLowerCase().includes(title.toLowerCase().slice(0, 15)))
  );

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-12 lg:py-18">
      {/* Back link */}
      <Link
        href="/ingredients"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3D271D] hover:text-[#5A3825] mb-8"
      >
        <ArrowLeft size={14} /> Back to Ingredient Library
      </Link>

      <div className="max-w-3xl">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
          {ingredient.annotation}
        </p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#3D271D]">
          {ingredient.name}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[#685346] leading-relaxed font-serif italic">
          “{ingredient.benefit}”
        </p>
        <div className="mt-8 border-t border-[#3D271D]/15 pt-6 text-sm text-[#685346] leading-relaxed space-y-4">
          <p>{ingredient.description}</p>
        </div>

        {/* Benefits list */}
        <div className="mt-10 border border-[#3D271D]/20 bg-[#F3ECE2]/80 p-8 rounded-xs">
          <h2 className="font-serif text-2xl text-[#3D271D]">Dermatological Benefits</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#3D271D]">
            {ingredient.benefitsList.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={16} className="text-[#5A3825] shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Found In Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 pt-12 border-t border-[#3D271D]/15">
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
            FORMULATED WITH {ingredient.name.toUpperCase()}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium text-[#3D271D] mb-8">
            Experience this ingredient in our rituals.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
