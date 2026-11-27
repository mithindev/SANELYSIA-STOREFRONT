import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BenefitsPage() {
  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-14 lg:py-20">
      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
        DAILY RITUAL CADENCE
      </p>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#3D271D]">
        Morning radiance.
        <br />
        <span className="marker italic font-normal text-[#3D271D]">Overnight renewal.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#685346]">
        Align your SAN ELYSIA formulations with your skin&apos;s daily rhythm—antioxidant defense
        and oil control by day, targeted pigmentation care and nourishing moisture every night.
      </p>

      {/* AM & PM Comparison Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Morning Routine Card */}
        <div className="border border-[#3D271D]/20 bg-[#FAF7F2] p-8 rounded-xs shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5A3825]">
            <Sun size={18} className="text-[#C3A27B]" />
            <span>The Morning Glow & Balance Protocol</span>
          </div>
          <h2 className="mt-3 font-serif text-2xl text-[#3D271D]">Brighten, Balance & Protect</h2>
          <p className="mt-2 text-xs text-[#685346] leading-relaxed">
            Focus: Antioxidant brightness, excess oil balance, and essential UV protection.
          </p>
          <ol className="mt-6 space-y-4 border-t border-[#3D271D]/15 pt-5 text-sm text-[#3D271D]">
            <li>
              <strong>1. Start with Clean, Dry Skin:</strong> Pat your face dry after morning cleansing before applying active serums.
            </li>
            <li>
              <strong>2. Choose Your Targeted AM Serum:</strong> Apply 2–3 drops of{' '}
              <Link href="/product/lumivitac-serum" className="underline underline-offset-2 font-medium">
                LumiVitaC (Vitamin C 10% + Glutathione)
              </Link>{' '}
              for dullness & glow, or{' '}
              <Link href="/product/balancing-serum" className="underline underline-offset-2 font-medium">
                Balancing Serum (Niacinamide 12% + Zinc 1%)
              </Link>{' '}
              for oily/combination pore care (start once daily and build to twice daily as tolerated).
            </li>
            <li>
              <strong>3. Moisturize & Shield:</strong> Follow with your daytime moisturizer and always finish with broad-spectrum sunscreen during the day.
            </li>
          </ol>
        </div>

        {/* Evening Routine Card */}
        <div className="border border-[#3D271D]/20 bg-[#F3ECE2]/80 p-8 rounded-xs shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5A3825]">
            <Moon size={18} className="text-[#5A3825]" />
            <span>The Evening Pigmentation & Renewal Protocol</span>
          </div>
          <h2 className="mt-3 font-serif text-2xl text-[#3D271D]">Target Tone & Replenish</h2>
          <p className="mt-2 text-xs text-[#685346] leading-relaxed">
            Focus: Fading the appearance of dark spots, calming redness, and locking in overnight hydration.
          </p>
          <ol className="mt-6 space-y-4 border-t border-[#3D271D]/15 pt-5 text-sm text-[#3D271D]">
            <li>
              <strong>1. Apply Your Evening Brightening Serum:</strong> On clean, dry skin, apply a few drops of{' '}
              <Link href="/product/sepiwhite-serum" className="underline underline-offset-2 font-medium">
                Sepiwhite Serum
              </Link>{' '}
              for pigmentation care or 2–3 drops of{' '}
              <Link href="/product/clear-tone-serum" className="underline underline-offset-2 font-medium">
                Clear Tone (Kojic Acid 2% + Azelaic Acid)
              </Link>{' '}
              for uneven tone and blemishes. Allow to absorb.
            </li>
            <li>
              <strong>2. Seal With Night Cream:</strong> Apply an appropriate amount of{' '}
              <Link href="/product/night-cream" className="underline underline-offset-2 font-medium">
                Night Cream (Intensive Brightening & Skin Renewal Cream)
              </Link>{' '}
              to face and neck every night, gently massaging until absorbed.
            </li>
            <li>
              <strong>3. Morning Follow-Through:</strong> Always wear sunscreen during the day to protect your brightening results.
            </li>
          </ol>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-4">
        <Link href="/shop?category=bundles">
          <Button variant="primary" size="md" className="inline-flex items-center gap-2">
            <span>Explore AM / PM Ritual Bundles</span>
            <ArrowRight size={15} />
          </Button>
        </Link>
        <Link href="/quiz">
          <Button variant="secondary" size="md" className="inline-flex items-center gap-2">
            <span>Take the Skin Diagnostic Quiz</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
