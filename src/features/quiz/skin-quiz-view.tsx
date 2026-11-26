'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Check, Leaf } from 'lucide-react';
import { quizQuestions } from '@/data/quiz';
import { catalogProducts, ProductItem } from '@/data/catalog';
import { ProductCard } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';

export function SkinQuizView() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<string[]>([]);

  const isDone = step === quizQuestions.length;
  const currentQuestion = quizQuestions[step];

  // Algorithmic Recommendation
  const recommendedRoutine = React.useMemo(() => {
    if (!isDone) return [];
    const midday = answers[0];
    const goal = answers[1];
    const sensitive = answers[2] === 'yes' || answers[2] === 'sometimes';
    const cadence = answers[3];

    const results: ProductItem[] = [];

    // Core Cleanser
    const cleanser = catalogProducts.find((p) => p.slug === 'soft-start-cream-cleanser');
    if (cleanser) results.push(cleanser);

    // Serum
    const serum = catalogProducts.find((p) => p.slug === 'dew-drops-balancing-serum');
    if (serum) results.push(serum);

    // Cream
    const cream = catalogProducts.find((p) => p.slug === 'cloud-nine-daily-moisturizer');
    if (cream) results.push(cream);

    // Bath soak if holistic cadence
    if (cadence === 'slow' || goal === 'wellness') {
      const soak = catalogProducts.find((p) => p.slug === 'quiet-moments-bath-soak');
      if (soak) results.push(soak);
    }

    return results;
  }, [isDone, answers]);

  const routineTitle = React.useMemo(() => {
    if (!isDone) return '';
    const sensitive = answers[2] === 'yes' || answers[2] === 'sometimes';
    const cadence = answers[3];
    if (sensitive) return 'The Gentle Equilibrium Ritual';
    if (cadence === 'slow') return 'The Restorative Evening Glow Ritual';
    if (cadence === 'minimal') return 'The Two-Step Essential Ritual';
    return 'The Targeted Everyday Balancing Ritual';
  }, [isDone, answers]);

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-14 lg:py-20 min-h-[70vh]">
      {!isDone ? (
        <div className="mx-auto max-w-2xl">
          <Leaf size={28} strokeWidth={1.2} className="text-[#C3A27B]" />
          <p className="mt-5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
            THE SAN ELYSIA SKIN DIAGNOSTIC
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-[#3D271D]">
            Let’s find <span className="marker italic font-normal text-[#3D271D]">your glow.</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[#685346]">
            No complicated questionnaires. Just 4 science-informed steps to understand your skin barrier rhythm.
          </p>

          {/* Progress bar */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex flex-1 gap-2">
              {quizQuestions.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    index <= step ? 'bg-[#5A3825]' : 'bg-[#E7DDD2]'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-mono text-[#8E7B6F]">
              0{step + 1} / 0{quizQuestions.length}
            </span>
          </div>

          {/* Question Card */}
          <fieldset className="mt-10">
            <legend className="font-serif text-2xl sm:text-3xl text-[#3D271D] font-normal">
              {currentQuestion.title}
            </legend>
            <p className="mt-2 text-xs leading-relaxed text-[#685346]">
              {currentQuestion.caption}
            </p>

            <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
              {currentQuestion.options.map((opt) => {
                const isSelected = answers[step] === opt.value;
                return (
                  <label
                    key={opt.value}
                    className={`relative flex min-h-[110px] cursor-pointer items-start gap-3 rounded-xs border p-5 transition-all ${
                      isSelected
                        ? 'border-[#3D271D] bg-[#F3ECE2] shadow-xs'
                        : 'border-[#E7DDD2] bg-[#FFFDF9] hover:border-[#3D271D]/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`quiz-step-${step}`}
                      value={opt.value}
                      checked={isSelected}
                      onChange={() => {
                        const next = [...answers];
                        next[step] = opt.value;
                        setAnswers(next);
                      }}
                      className="mt-1 accent-[#5A3825]"
                    />
                    <div>
                      <span className="block font-serif text-lg text-[#3D271D] leading-tight">
                        {opt.title}
                      </span>
                      <span className="mt-1.5 block text-xs leading-relaxed text-[#685346]">
                        {opt.body}
                      </span>
                    </div>
                    {isSelected && (
                      <Check size={14} className="absolute right-3.5 top-3.5 text-[#5A3825]" />
                    )}
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* Stepper Buttons */}
          <div className="mt-8 flex justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              disabled={step === 0}
              className="inline-flex min-h-12 items-center gap-2 border border-[#3D271D]/25 bg-transparent px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#3D271D] rounded-sm hover:border-[#3D271D] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
            >
              <ArrowLeft size={14} /> Back
            </button>
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              disabled={!answers[step]}
              className="inline-flex min-h-12 items-center gap-2 bg-[#5A3825] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FAF7F2] rounded-sm hover:bg-[#3D271D] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              <span>{step === quizQuestions.length - 1 ? 'Discover my ritual' : 'Continue'}</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <p className="mt-8 text-[10px] leading-relaxed text-[#8E7B6F]">
            Your preferences stay private in this session and are never sold. This is an educational
            routine guide, not a medical diagnosis.
          </p>
        </div>
      ) : (
        /* Results View */
        <div>
          <div className="mx-auto max-w-2xl text-center">
            <Leaf size={32} strokeWidth={1.2} className="mx-auto text-[#C3A27B]" />
            <p className="mt-5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
              A LITTLE CARE, CHOSEN FOR YOU
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-[#3D271D]">
              {routineTitle}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#685346] max-w-xl mx-auto">
              Based on your answers, here is your customized daily equilibrium prescription.
              Formulated to soothe, clarify, and strengthen your skin barrier.
            </p>
          </div>

          {/* Recommended Product Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedRoutine.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Step-by-Step Prescription Plan */}
          <div className="mx-auto mt-12 max-w-2xl border border-[#3D271D]/20 bg-[#F3ECE2]/80 p-8 rounded-xs shadow-xs">
            <h2 className="font-serif text-2xl text-[#3D271D]">Your Daily Application Order</h2>
            <ol className="mt-5 space-y-3.5 text-sm text-[#3D271D] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs font-semibold text-[#5A3825] pt-0.5">01.</span>
                <span>
                  <strong>Cleanse:</strong> Massage 1–2 pumps of Soft Start Cleanser onto dry face. Rinse gently with lukewarm water.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs font-semibold text-[#5A3825] pt-0.5">02.</span>
                <span>
                  <strong>Balance:</strong> Press 3–4 drops of Dew Drops 12% Niacinamide Serum into damp skin to regulate pores and sebum.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs font-semibold text-[#5A3825] pt-0.5">03.</span>
                <span>
                  <strong>Protect:</strong> Warm Cloud Nine Ceramide Cream between palms and smooth evenly to seal in barrier lipids.
                </span>
              </li>
            </ol>
            <p className="mt-6 border-t border-[#3D271D]/15 pt-4 text-[10px] text-[#8E7B6F] leading-relaxed">
              Always finish your morning ritual with daily broad-spectrum SPF 30+.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/shop">
              <Button variant="primary" size="md">
                EXPLORE ALL PRODUCTS
              </Button>
            </Link>
            <button
              onClick={() => {
                setStep(0);
                setAnswers([]);
              }}
              className="inline-flex min-h-12 items-center border border-[#3D271D]/25 bg-transparent px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#3D271D] rounded-sm hover:border-[#3D271D] hover:bg-[#FAF7F2] cursor-pointer"
            >
              Take the quiz again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
