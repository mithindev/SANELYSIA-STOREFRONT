'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useCart } from './cart-context';
import { Button } from '@/components/ui/button';
import { formatPaise } from '@/lib/utils/cn';
import { LUXURY_EASE } from '@/components/motion';

const FREE_SHIPPING_THRESHOLD_PAISE = 250000; // ₹2,500

export function CartDrawer() {
  const { items, isOpen, closeCart, totalPaise, formattedTotal, updateQuantity, removeItem } =
    useCart();

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  const freeShippingProgress = Math.min(100, (totalPaise / FREE_SHIPPING_THRESHOLD_PAISE) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD_PAISE - totalPaise);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Your shopping bag"
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* Backdrop */}
          <motion.div
            onClick={closeCart}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#3D271D]/40 backdrop-blur-xs"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: LUXURY_EASE }}
              className="w-screen max-w-md bg-[#FAF7F2] border-l border-[#E7DDD2] shadow-2xl flex flex-col justify-between"
            >
          {/* Header */}
          <div className="p-6 border-b border-[#E7DDD2] bg-[#FAF7F2]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#685346]">
                  A LITTLE CARE, COLLECTED
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#3D271D] mt-1">
                  Your ritual bag.
                </h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close shopping bag"
                className="w-10 h-10 flex items-center justify-center rounded-sm text-[#3D271D] hover:bg-[#F3ECE2] transition-colors cursor-pointer"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Free shipping threshold bar */}
            <div className="mt-4 p-3 bg-[#F3ECE2] border border-[#E7DDD2] rounded-xs text-xs">
              <div className="flex items-center justify-between text-[11px] text-[#3D271D] font-medium mb-1.5">
                <span>
                  {remainingForFreeShipping === 0
                    ? 'Complimentary insured shipping unlocked!'
                    : `Add ${formatPaise(remainingForFreeShipping)} more for free delivery`}
                </span>
                <span>{Math.round(freeShippingProgress)}%</span>
              </div>
              <div className="w-full bg-[#E7DDD2] h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full transition-colors duration-300 ${
                    freeShippingProgress >= 100 ? 'bg-[#C3A27B]' : 'bg-[#5A3825]'
                  }`}
                  initial={false}
                  animate={{ width: `${freeShippingProgress}%` }}
                  transition={{ duration: 0.45, ease: LUXURY_EASE }}
                />
              </div>
            </div>
          </div>

          {/* Line items list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {!items.length ? (
              <div className="py-20 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#F3ECE2] flex items-center justify-center text-[#8E7B6F] mb-4">
                  <ShoppingBag size={28} strokeWidth={1.25} />
                </div>
                <h3 className="font-serif text-2xl text-[#3D271D]">A little room for good things.</h3>
                <p className="text-xs text-[#685346] mt-2 max-w-xs leading-relaxed">
                  Your bag is currently empty. Explore our targeted formulations to begin your daily ritual.
                </p>
                <Link href="/shop" onClick={closeCart} className="mt-6">
                  <Button variant="primary" size="sm">
                    EXPLORE COLLECTION
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-[#E7DDD2]">
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.article
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 24, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.28, ease: LUXURY_EASE }}
                      className="py-4 flex gap-4 first:pt-0 last:pb-0"
                    >
                    <div className="relative w-20 h-24 rounded-xs overflow-hidden bg-[#F3ECE2] border border-[#E7DDD2] shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            href={`/product/${item.slug}`}
                            onClick={closeCart}
                            className="font-serif text-base text-[#3D271D] hover:text-[#5A3825] leading-snug line-clamp-1"
                          >
                            {item.title}
                          </Link>
                          <span className="text-xs font-semibold text-[#3D271D] shrink-0">
                            {formatPaise(item.pricePaise * item.quantity)}
                          </span>
                        </div>
                        {item.variantTitle !== 'Default' && (
                          <p className="text-[10px] text-[#8E7B6F] uppercase tracking-wider mt-0.5">
                            {item.variantTitle}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-3 pt-1">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-[#E7DDD2] rounded-xs bg-[#FFFDF9]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label={`Decrease ${item.title} quantity`}
                            className="w-7 h-7 flex items-center justify-center text-[#3D271D] hover:bg-[#F3ECE2] cursor-pointer"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-7 text-center text-xs font-sans font-medium text-[#3D271D]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label={`Increase ${item.title} quantity`}
                            className="w-7 h-7 flex items-center justify-center text-[#3D271D] hover:bg-[#F3ECE2] cursor-pointer"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.title} from bag`}
                          className="text-[#8E7B6F] hover:text-[#3D271D] p-1 text-xs inline-flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Trash2 size={13} />
                          <span className="text-[9px] uppercase tracking-wider">Remove</span>
                        </button>
                      </div>
                    </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E7DDD2] bg-[#FAF7F2] space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#685346] font-sans">Subtotal</span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={formattedTotal}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, ease: LUXURY_EASE }}
                    className="text-[#3D271D] font-semibold text-base"
                  >
                    {formattedTotal}
                  </motion.span>
                </AnimatePresence>
              </div>
              <p className="text-[10px] text-[#8E7B6F] leading-normal">
                Taxes and insured delivery options are calculated at secure checkout.
              </p>

              <div className="space-y-2">
                <Link href="/cart" onClick={closeCart} className="block w-full">
                  <Button variant="primary" size="md" className="w-full flex items-center justify-center gap-2">
                    <span>CONTINUE TO CHECKOUT</span>
                    <ArrowRight size={14} />
                  </Button>
                </Link>
                <Link href="/shop" onClick={closeCart} className="block w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    <span>KEEP EXPLORING</span>
                  </Button>
                </Link>
              </div>
            </div>
          )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
