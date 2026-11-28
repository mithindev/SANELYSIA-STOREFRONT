'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Minus, Plus, Trash2, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useCart } from '@/components/cart/cart-context';
import { Button } from '@/components/ui/button';
import { formatPaise } from '@/lib/utils/cn';
import { LUXURY_EASE } from '@/components/motion';

const FREE_SHIPPING_THRESHOLD_PAISE = 250000;

export default function CartPage() {
  const { items, totalPaise, formattedTotal, updateQuantity, removeItem, clearCart } = useCart();
  const [couponCode, setCouponCode] = React.useState('');
  const [appliedCoupon, setAppliedCoupon] = React.useState<string | null>(null);
  const [checkoutBusy, setCheckoutBusy] = React.useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = React.useState(false);

  const discountPaise = appliedCoupon === 'GLOW10' ? Math.round(totalPaise * 0.1) : 0;
  const finalTotalPaise = Math.max(0, totalPaise - discountPaise);

  const freeShipping = totalPaise >= FREE_SHIPPING_THRESHOLD_PAISE;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'GLOW10') {
      setAppliedCoupon('GLOW10');
      setCouponCode('');
    } else {
      alert('Invalid code. Try entering "GLOW10" for 10% welcome discount.');
    }
  };

  const handleCheckout = () => {
    setCheckoutBusy(true);
    setTimeout(() => {
      setCheckoutBusy(false);
      setCheckoutSuccess(true);
      clearCart();
    }, 1200);
  };

  if (checkoutSuccess) {
    return (
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-[#F3ECE2] flex items-center justify-center text-[#5A3825] mb-4">
          <ShieldCheck size={32} />
        </div>
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
          ORDER CONFIRMATION
        </p>
        <h1 className="mt-2 font-serif text-3xl sm:text-4xl text-[#3D271D]">
          Your ritual is on its way.
        </h1>
        <p className="mt-3 text-sm text-[#685346] max-w-md leading-relaxed">
          Thank you for choosing SAN ELYSIA. Your order has been placed with complimentary insured
          shipping. A confirmation receipt has been dispatched to your email.
        </p>
        <Link href="/shop" className="mt-8">
          <Button variant="primary" size="md">
            CONTINUE BROWSING
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-14 lg:py-20 min-h-[60vh]">
      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
        A LITTLE CARE, COLLECTED
      </p>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#3D271D]">
        Your ritual bag.
      </h1>

      {!items.length ? (
        <div className="py-20 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#F3ECE2] flex items-center justify-center text-[#8E7B6F] mb-4">
            <ShoppingBag size={32} strokeWidth={1} />
          </div>
          <h2 className="font-serif text-3xl text-[#3D271D]">A little room for good things.</h2>
          <p className="mt-3 text-sm text-[#685346] max-w-sm">
            Your bag is empty. Explore our targeted formulations to find your everyday ritual.
          </p>
          <Link href="/shop" className="mt-7">
            <Button variant="primary" size="md">
              EXPLORE THE COLLECTION
            </Button>
          </Link>
        </div>
      ) : (
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.7fr_1fr]">
          {/* Left: Items list */}
          <div>
            <div className="border-t border-[#3D271D]/20 divide-y divide-[#3D271D]/20">
              <AnimatePresence initial={false}>
                {items.map((item) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.3, ease: LUXURY_EASE }}
                    className="py-6 flex gap-6"
                  >
                  <Link
                    href={`/product/${item.slug}`}
                    className="relative w-24 sm:w-28 aspect-[4/5] rounded-xs overflow-hidden bg-[#F3ECE2] border border-[#E7DDD2] shrink-0"
                  >
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </Link>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <Link
                          href={`/product/${item.slug}`}
                          className="font-serif text-xl sm:text-2xl text-[#3D271D] hover:text-[#5A3825]"
                        >
                          {item.title}
                        </Link>
                        <p className="text-base font-semibold text-[#3D271D]">
                          {formatPaise(item.pricePaise * item.quantity)}
                        </p>
                      </div>
                      {item.variantTitle !== 'Default' && (
                        <p className="mt-1 text-xs text-[#8E7B6F] uppercase tracking-wider">
                          {item.variantTitle}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-6">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#3D271D]/20 bg-[#FFFDF9] rounded-xs">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label={`Decrease ${item.title} quantity`}
                          className="w-9 h-9 flex items-center justify-center text-[#3D271D] hover:bg-[#F3ECE2] cursor-pointer"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-xs font-sans font-medium text-[#3D271D]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label={`Increase ${item.title} quantity`}
                          className="w-9 h-9 flex items-center justify-center text-[#3D271D] hover:bg-[#F3ECE2] cursor-pointer"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-1.5 text-[10px] font-sans font-medium uppercase tracking-wider text-[#8E7B6F] hover:text-[#3D271D] cursor-pointer transition-colors"
                      >
                        <Trash2 size={13} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#3D271D]/15">
              <Link
                href="/shop"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#3D271D] font-semibold hover:text-[#5A3825]"
              >
                <span>Continue shopping</span>
                <ArrowRight size={13} />
              </Link>
              <button
                type="button"
                onClick={clearCart}
                className="text-[11px] text-[#8E7B6F] underline underline-offset-4 hover:text-[#3D271D] cursor-pointer"
              >
                Empty bag
              </button>
            </div>
          </div>

          {/* Right: Order Summary */}
          <aside className="border border-[#3D271D]/20 bg-[#F3ECE2]/80 p-7 sm:p-9 rounded-xs shadow-xs space-y-6">
            <h2 className="font-serif text-2xl text-[#3D271D]">Your everyday care</h2>

            {/* Free shipping status */}
            <div className="p-3 bg-[#FAF7F2] border border-[#E7DDD2] rounded-xs text-xs flex items-center gap-2 text-[#3D271D]">
              <span>
                {freeShipping
                  ? 'Complimentary insured shipping included!'
                  : `Add ${formatPaise(FREE_SHIPPING_THRESHOLD_PAISE - totalPaise)} for free shipping`}
              </span>
            </div>

            {/* Calculations */}
            <div className="space-y-3 border-y border-[#3D271D]/20 py-5 text-sm text-[#3D271D]">
              <div className="flex justify-between">
                <span className="text-[#685346]">Subtotal</span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={formattedTotal}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, ease: LUXURY_EASE }}
                    className="font-medium"
                  >
                    {formattedTotal}
                  </motion.span>
                </AnimatePresence>
              </div>
              <AnimatePresence>
                {appliedCoupon && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.24, ease: LUXURY_EASE }}
                    className="flex justify-between text-[#5A3825] overflow-hidden"
                  >
                    <span>Discount ({appliedCoupon})</span>
                    <span>- {formatPaise(discountPaise)}</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex justify-between">
                <span className="text-[#685346]">Insured Delivery</span>
                <span>{freeShipping ? 'FREE' : '₹150'}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-[#3D271D]/15 text-base font-semibold text-[#3D271D]">
                <span>Total</span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={finalTotalPaise + (freeShipping ? 0 : 15000)}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, ease: LUXURY_EASE }}
                  >
                    {formatPaise(finalTotalPaise + (freeShipping ? 0 : 15000))}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Promo code (e.g. GLOW10)"
                className="flex-1 bg-[#FFFDF9] border border-[#3D271D]/20 px-3 py-2 text-xs text-[#3D271D] placeholder:text-[#8E7B6F] rounded-xs outline-none uppercase"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#FAF7F2] border border-[#3D271D]/30 text-xs font-semibold text-[#3D271D] hover:bg-[#3D271D] hover:text-[#FAF7F2] rounded-xs transition-colors cursor-pointer"
              >
                Apply
              </button>
            </form>

            {/* Checkout Action */}
            <Button
              variant="primary"
              size="md"
              onClick={handleCheckout}
              disabled={checkoutBusy}
              className="w-full flex items-center justify-center gap-2 py-4"
            >
              <span>{checkoutBusy ? 'Preparing checkout…' : 'Continue to checkout'}</span>
              <ArrowRight size={16} />
            </Button>

            <p className="text-center text-[10px] uppercase tracking-[0.14em] text-[#8E7B6F]">
              Secure SSL Checkout · A little peace of mind.
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}
