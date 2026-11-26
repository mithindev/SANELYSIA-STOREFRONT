import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Leaf } from 'lucide-react';
import { Container } from '@/components/ui/container';

export function Footer() {
  return (
    <footer className="border-t border-[#3D271D]/15 bg-[#F3ECE2]/60 mt-auto">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] pb-12">
          {/* Col 1: Brand & Philosophy */}
          <div>
            <Link href="/" className="font-serif text-2xl tracking-[0.14em] text-[#3D271D] uppercase font-normal">
              SAN ELYSIA<span className="text-[#8E7B6F]">.</span>
            </Link>
            <p className="mt-4 max-w-[290px] text-xs leading-relaxed text-[#685346]">
              Thoughtful skincare. Science-informed wellness.
              <br />
              Restorative daily rituals designed to bring your skin back to balance.
            </p>
            <p className="mt-5 flex items-center gap-2 text-[10px] font-sans font-medium uppercase tracking-[0.16em] text-[#685346]">
              <Leaf size={14} strokeWidth={1.5} className="text-[#C3A27B]" />
              Rooted in nature. Formulated with science.
            </p>
          </div>

          {/* Col 2: Your Daily Glow */}
          <div>
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3D271D]">
              Your daily glow
            </h3>
            <div className="mt-5 flex flex-col items-start gap-3 text-xs text-[#685346]">
              <Link href="/shop" className="hover:text-[#3D271D] transition-colors">
                Shop all care
              </Link>
              <Link href="/shop?category=bundles" className="hover:text-[#3D271D] transition-colors">
                Ritual bundles
              </Link>
              <Link href="/quiz" className="hover:text-[#3D271D] transition-colors">
                Diagnostic skin quiz
              </Link>
              <Link href="/benefits" className="hover:text-[#3D271D] transition-colors">
                Daily routine guide
              </Link>
            </div>
          </div>

          {/* Col 3: Education & Editorial */}
          <div>
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3D271D]">
              A little more
            </h3>
            <div className="mt-5 flex flex-col items-start gap-3 text-xs text-[#685346]">
              <Link href="/ingredients" className="hover:text-[#3D271D] transition-colors">
                Our ingredient library
              </Link>
              <Link href="/journal" className="hover:text-[#3D271D] transition-colors">
                The skin journal
              </Link>
              <Link href="/reviews" className="hover:text-[#3D271D] transition-colors">
                Community reviews
              </Link>
              <Link href="/#faq" className="hover:text-[#3D271D] transition-colors">
                Questions & answers
              </Link>
            </div>
          </div>

          {/* Col 4: Support & Contact */}
          <div>
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3D271D]">
              Here for you
            </h3>
            <div className="mt-5 flex flex-col items-start gap-3 text-xs text-[#685346]">
              <a
                href="mailto:care@sanelysia.com"
                className="inline-flex items-center gap-1 hover:text-[#3D271D] transition-colors"
              >
                <span>care@sanelysia.com</span>
                <ArrowUpRight size={13} />
              </a>
              <Link href="/cart" className="hover:text-[#3D271D] transition-colors">
                View your bag
              </Link>
              <Link href="/policies" className="hover:text-[#3D271D] transition-colors">
                Delivery & returns
              </Link>
              <p className="text-[11px] leading-relaxed text-[#8E7B6F] pt-1">
                For routine advice or order inquiries, reach out anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="border-t border-[#3D271D]/15 pt-6 text-[10px] leading-relaxed text-[#8E7B6F] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p>© {new Date().getFullYear()} SAN ELYSIA. Care for yourself, with balance.</p>
          <p>Science-informed skincare education, not medical advice.</p>
        </div>
      </Container>
    </footer>
  );
}
