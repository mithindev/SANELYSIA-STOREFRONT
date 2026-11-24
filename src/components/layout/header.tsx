'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';

interface HeaderProps {
  bagItemCount?: number;
}

export function Header({ bagItemCount = 0 }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Close mobile drawer on escape
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'SHOP', href: '#shop' },
    { label: 'THE FORMULA', href: '#formula' },
    { label: 'SKIN JOURNAL', href: '#journal' },
    { label: 'OUR PHILOSOPHY', href: '#philosophy' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DDD2] transition-colors">
      <Container className="flex items-center justify-between h-20 sm:h-22">
        {/* Left: Brand Logo & Wordmark */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3825]"
            aria-label="SAN ELYSIA — Home"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
              <Image
                src="/images/brand/san-elysia-symbol-chocolate.svg"
                alt="SAN ELYSIA Emblem"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.14em] text-[#3D271D] leading-none uppercase font-normal group-hover:text-[#5A3825] transition-colors">
                SAN ELYSIA
              </span>
              <span className="font-sans text-[8.5px] sm:text-[9.5px] tracking-[0.26em] text-[#685346] uppercase font-medium mt-1">
                THOUGHTFUL SKINCARE
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-11"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-[12.5px] font-medium tracking-[0.18em] uppercase text-[#3D271D] hover:text-[#5A3825] transition-colors relative py-1 focus-visible:ring-1 focus-visible:ring-[#5A3825]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Utility actions */}
        <div className="flex items-center gap-5 sm:gap-7">
          {/* Find Your Ritual link */}
          <Link
            href="#ritual"
            className="hidden sm:inline-flex items-center gap-1 font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#3D271D] border-b border-[#3D271D] pb-0.5 hover:text-[#5A3825] hover:border-[#5A3825] transition-colors"
          >
            FIND YOUR RITUAL
          </Link>

          {/* Account Icon */}
          <Link
            href="#account"
            aria-label="Customer Account"
            className="text-[#3D271D] hover:text-[#5A3825] transition-colors p-1 focus-visible:ring-2 focus-visible:ring-[#5A3825]"
          >
            <User className="w-5 h-5 stroke-[1.6]" />
          </Link>

          {/* Bag Icon with item count */}
          <button
            type="button"
            aria-label={`Shopping Bag (${bagItemCount} items)`}
            className="relative text-[#3D271D] hover:text-[#5A3825] transition-colors p-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#5A3825]"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.6]" />
            {bagItemCount > 0 && (
              <span className="absolute -top-1 -right-1.5 min-w-[17px] h-[17px] px-1 rounded-full bg-[#5A3825] text-[#FAF7F2] text-[10px] font-sans font-medium flex items-center justify-center">
                {bagItemCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden text-[#3D271D] p-1.5 focus-visible:ring-2 focus-visible:ring-[#5A3825] cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.75]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.75]" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 top-[112px] z-50 bg-[#FAF7F2] md:hidden flex flex-col justify-between p-6 sm:p-8 border-t border-[#E7DDD2] animate-in fade-in slide-in-from-top-2 duration-200 overflow-y-auto"
        >
          <div className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl tracking-[0.1em] text-[#3D271D] hover:text-[#5A3825] py-2 border-b border-[#E7DDD2]/60"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#ritual"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-between font-sans text-sm font-semibold tracking-[0.16em] uppercase text-[#5A3825] py-3 mt-4"
            >
              <span>FIND YOUR RITUAL</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-[#E7DDD2] flex flex-col gap-3 text-xs tracking-wider uppercase text-[#685346]">
            <p>SAN ELYSIA — Science-Informed Skincare</p>
            <p className="text-[11px] text-[#8E7B6F]">A little care. A balanced, healthy-looking glow.</p>
          </div>
        </div>
      )}
    </header>
  );
}
