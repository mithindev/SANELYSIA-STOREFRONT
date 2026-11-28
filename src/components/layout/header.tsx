'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Container } from '@/components/ui/container';
import { useCart } from '@/components/cart/cart-context';
import { LUXURY_EASE, ScrollProgressLine } from '@/components/motion';
import { BrandButterfly } from './brand-butterfly';

interface HeaderProps {
  bagItemCount?: number;
}

export function Header({ bagItemCount }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [compact, setCompact] = React.useState(false);
  const [butterflyLift, setButterflyLift] = React.useState(0);
  const cart = useCart();

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const hero = document.querySelector('[aria-label="Welcome to SAN ELYSIA"]');
      if (hero) {
        setCompact(hero.getBoundingClientRect().bottom <= 80);
      } else {
        setCompact(window.scrollY > 420);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // If bagItemCount prop is explicitly provided, use it; otherwise use dynamic context count
  const displayCount = bagItemCount !== undefined ? bagItemCount : cart.itemCount;

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
    { label: 'SHOP', href: '/shop' },
    { label: 'THE FORMULA', href: '/ingredients' },
    { label: 'SKIN JOURNAL', href: '/journal' },
    { label: 'OUR PHILOSOPHY', href: '/#philosophy' },
  ];

  return (
    <header
      className={`sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DDD2] transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-[height] duration-300 ease-out ${
          compact ? 'h-14 sm:h-15' : 'h-20 sm:h-22'
        }`}
      >
        {/* Left: Brand Logo & Wordmark */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            onMouseEnter={() => setButterflyLift((n) => n + 1)}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3825]"
            aria-label="SAN ELYSIA — Home"
          >
            <div
              className={`relative flex-shrink-0 transition-all duration-300 group-hover:rotate-[5deg] group-hover:scale-105 ${
                compact ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-11 h-11 sm:w-12 sm:h-12'
              }`}
            >
              <Image
                src="/images/brand/san-elysia-symbol-chocolate.svg"
                alt="SAN ELYSIA Emblem"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`relative inline-block font-serif tracking-[0.14em] text-[#3D271D] leading-none uppercase font-normal group-hover:text-[#5A3825] transition-all duration-300 ${
                  compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
                }`}
              >
                SAN ELYSIA
                <BrandButterfly visible={!compact} liftSignal={butterflyLift} />
              </span>
              <span
                className={`font-sans tracking-[0.26em] text-[#685346] uppercase font-medium transition-all duration-300 ${
                  compact
                    ? 'text-[7.5px] sm:text-[8px] mt-0.5'
                    : 'text-[8.5px] sm:text-[9.5px] mt-1'
                }`}
              >
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
              className="font-sans text-[12.5px] font-medium tracking-[0.18em] uppercase text-[#3D271D] hover:text-[#5A3825] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-[#5A3825] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:ring-1 focus-visible:ring-[#5A3825]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Utility actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Find Your Ritual link */}
          <Link
            href="/quiz"
            className="hidden sm:inline-flex items-center gap-1 font-sans text-xs font-semibold tracking-[0.16em] uppercase text-[#3D271D] border-b border-[#3D271D] pb-0.5 hover:text-[#5A3825] hover:border-[#5A3825] transition-colors mr-2"
          >
            FIND YOUR RITUAL
          </Link>

          {/* Account Icon */}
          <Link
            href="/policies"
            aria-label="Customer Account"
            className={`flex items-center justify-center text-[#3D271D] hover:text-[#5A3825] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#5A3825] ${
              compact ? 'h-9 w-9' : 'h-11 w-11'
            }`}
          >
            <User className="w-5 h-5 stroke-[1.6]" />
          </Link>

          {/* Bag Icon with item count & distinct outlined frame matching reference */}
          <button
            type="button"
            onClick={cart.toggleCart}
            aria-label={`Shopping Bag (${displayCount} items)`}
            className={`relative flex items-center justify-center rounded-sm border border-[#3D271D]/20 text-[#3D271D] hover:bg-[#F3ECE2] transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#5A3825] ${
              compact ? 'h-9 w-9' : 'h-11 w-11'
            }`}
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.6]" />
            <AnimatePresence mode="popLayout">
              {displayCount > 0 && (
                <motion.span
                  key={displayCount}
                  initial={{ scale: 0.65, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.65, opacity: 0 }}
                  transition={{ duration: 0.22, ease: LUXURY_EASE }}
                  className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#5A3825] text-[#FAF7F2] text-[9.5px] font-sans font-medium flex items-center justify-center"
                >
                  {displayCount}
                </motion.span>
              )}
            </AnimatePresence>
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

      <ScrollProgressLine visible={compact} />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: LUXURY_EASE }}
            className={`fixed inset-0 z-50 bg-[#FAF7F2] md:hidden flex flex-col justify-between p-6 sm:p-8 border-t border-[#E7DDD2] overflow-y-auto ${
              compact ? 'top-[57px]' : 'top-[112px]'
            }`}
          >
            <div className="flex flex-col space-y-6 pt-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.25, ease: LUXURY_EASE }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-serif text-2xl tracking-[0.1em] text-[#3D271D] hover:text-[#5A3825] py-2 border-b border-[#E7DDD2]/60"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/quiz"
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
