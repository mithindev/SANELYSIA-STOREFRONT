import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Sun, Moon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BenefitsPage() {
  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-14 lg:py-20">
      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
        DAILY RITUAL CADENCE
      </p>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#3D271D]">
        Morning clarity.
        <br />
        <span className="marker italic font-normal text-[#3D271D]">Evening restoration.</span>
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#685346]">
        Skincare works best when aligned with the natural circadian biology of human skin. Here is how
        our 3-step essentials support your barrier across day and night.
      </p>

      {/* AM & PM Comparison Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Morning Routine Card */}
        <div className="border border-[#3D271D]/20 bg-[#FAF7F2] p-8 rounded-xs shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5A3825]">
            <Sun size={18} className="text-[#C3A27B]" />
            <span>The Morning Glow Protocol</span>
          </div>
          <h2 className="mt-3 font-serif text-2xl text-[#3D271D]">Clarify & Shield</h2>
          <p className="mt-2 text-xs text-[#685346] leading-relaxed">
            Focus: Oil regulation, antioxidant defense, and weightless hydration for daytime wear.
          </p>
          <ol className="mt-6 space-y-4 border-t border-[#3D271D]/15 pt-5 text-sm text-[#3D271D]">
            <li>
              <strong>1. Cleanse Gently:</strong> Use lukewarm water and 1 pump of Soft Start Cleanser.
            </li>
            <li>
              <strong>2. Balance:</strong> Apply 3–4 drops of Dew Drops 12% Niacinamide Serum to damp skin.
            </li>
            <li>
              <strong>3. Protect:</strong> Seal with a thin veil of Cloud Nine Ceramide Cream + broad-spectrum SPF 30+.
            </li>
          </ol>
        </div>

        {/* Evening Routine Card */}
        <div className="border border-[#3D271D]/20 bg-[#F3ECE2]/80 p-8 rounded-xs shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5A3825]">
            <Moon size={18} className="text-[#5A3825]" />
            <span>The Evening Restoration Protocol</span>
          </div>
          <h2 className="mt-3 font-serif text-2xl text-[#3D271D]">Rebuild & Restore</h2>
          <p className="mt-2 text-xs text-[#685346] leading-relaxed">
            Focus: Removing daytime pollutants, repairing cellular barrier lipids, and deep restorative calm.
          </p>
          <ol className="mt-6 space-y-4 border-t border-[#3D271D]/15 pt-5 text-sm text-[#3D271D]">
            <li>
              <strong>1. Melt Impurities:</strong> Massage 2 pumps of Soft Start Cleanser onto dry face to dissolve grime. Rinse clean.
            </li>
            <li>
              <strong>2. Active Cell Repair:</strong> Press Dew Drops Serum to calm post-work redness and support skin barrier ceramides.
            </li>
            <li>
              <strong>3. Deep Barrier Recovery:</strong> Apply a generous layer of Cloud Nine Cream to prevent overnight water loss.
            </li>
          </ol>
        </div>
      </div>

      <div className="mt-14 text-center">
        <Link href="/shop?category=bundles">
          <Button variant="primary" size="md" className="inline-flex items-center gap-2">
            <span>Explore the Complete Ritual Bundle</span>
            <ArrowRight size={15} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
