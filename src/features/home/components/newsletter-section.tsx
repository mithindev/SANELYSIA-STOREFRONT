'use client';

import * as React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Reveal, MarkerHighlight, LUXURY_EASE } from '@/components/motion';

export function NewsletterSection() {
  const [status, setStatus] = React.useState<'idle' | 'busy' | 'success' | 'error'>('idle');
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus('busy');
    // Simulate instantaneous graceful subscription
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 450);
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-[#F3ECE2]/70">
      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
            A little glow in your inbox
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-medium tracking-tight text-[#3D271D]">
            Good things,
            <br />
            <MarkerHighlight className="italic font-normal text-[#3D271D]">
              gently delivered.
            </MarkerHighlight>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#685346] max-w-md">
            Be first to discover new clinical rituals, formulation notes, and receive 10% off your initial order.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                role="status"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: LUXURY_EASE }}
                className="border border-[#3D271D]/20 bg-[#FAF7F2] p-8 rounded-xs shadow-xs"
              >
                <Check size={24} className="text-[#5A3825]" />
                <h3 className="mt-3 font-serif text-2xl text-[#3D271D]">You’re on the list.</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#685346]">
                  Welcome to our community. Check your inbox shortly for your 10% welcome invitation.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                className="max-w-lg"
              >
                <label htmlFor="newsletter-email" className="mb-2 block text-xs font-sans text-[#3D271D] font-medium">
                  Your email address
                </label>
                <div className="flex border-b border-[#3D271D]/50 bg-transparent">
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="A little hello starts here…"
                    className="min-w-0 flex-1 bg-transparent px-0 py-4 text-sm text-[#3D271D] placeholder:text-[#8E7B6F] outline-none"
                  />
                  <button
                    type="submit"
                    disabled={status === 'busy'}
                    className="group flex min-h-12 items-center gap-2 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3D271D] hover:text-[#5A3825] transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <span>{status === 'busy' ? 'Joining…' : 'Count me in'}</span>
                    <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

                <label className="mt-4 flex items-start gap-2.5 text-[10px] leading-relaxed text-[#8E7B6F] cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    defaultChecked
                    className="mt-1 accent-[#5A3825] cursor-pointer"
                  />
                  <span>
                    I’d like to receive SAN ELYSIA ritual notes and formulation releases. We respect your peace and never share data.
                  </span>
                </label>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
