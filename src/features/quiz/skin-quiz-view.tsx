'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Check, Leaf } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { quizQuestions } from '@/data/quiz';
import { catalogProducts, ProductItem } from '@/data/catalog';
import { ProductCard } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import { MarkerHighlight, LUXURY_EASE } from '@/components/motion';

export function SkinQuizView() {
  const [step, setStep] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const [answers, setAnswers] = React.useState<string[]>([]);

  const isDone = step === quizQuestions.length;
  const currentQuestion = quizQuestions[step];

  // Algorithmic Recommendation grounded in the 5 PDF formulations
  const recommendedRoutine = React.useMemo(() => {
    if (!isDone) return [];
    const concern = answers[0];
    const skinType = answers[1];
    const sensitivity = answers[2];
    const cadence = answers[3];

    const bySlug = (slug: string) => catalogProducts.find((p) => p.slug === slug);
    const results: ProductItem[] = [];
    const addUnique = (item?: ProductItem) => {
      if (item && !results.some((r) => r.slug === item.slug)) {
        results.push(item);
      }
    };

    // Determine primary targeted serum
    if (concern === 'oil-pores' || (skinType === 'oily' && concern !== 'pigmentation')) {
      addUnique(bySlug('balancing-serum'));
    } else if (concern === 'pigmentation') {
      if (sensitivity === 'sensitive' || skinType === 'dry') {
        addUnique(bySlug('sepiwhite-serum'));
      } else if (skinType === 'oily' || skinType === 'combination') {
        addUnique(bySlug('clear-tone-serum'));
      } else {
        addUnique(bySlug('sepiwhite-serum'));
      }
    } else if (concern === 'dullness') {
      addUnique(bySlug('lumivitac-serum'));
    } else {
      // Overnight renewal focus
      addUnique(
        sensitivity === 'sensitive' ? bySlug('sepiwhite-serum') : bySlug('lumivitac-serum')
      );
      addUnique(bySlug('night-cream'));
    }

    // Cadence additions
    if (cadence === 'duo') {
      addUnique(bySlug('night-cream'));
    } else if (cadence === 'complete') {
      if (concern === 'oil-pores' || skinType === 'oily') {
        addUnique(bySlug('balancing-serum'));
        addUnique(bySlug('clear-tone-serum'));
      } else {
        addUnique(bySlug('lumivitac-serum'));
        addUnique(
          sensitivity === 'sensitive' ? bySlug('sepiwhite-serum') : bySlug('clear-tone-serum')
        );
      }
      addUnique(bySlug('night-cream'));
    }

    return results;
  }, [isDone, answers]);

  const routineTitle = React.useMemo(() => {
    if (!isDone) return '';
    const concern = answers[0];
    const cadence = answers[3];
    if (concern === 'oil-pores') return 'The Clear Balance & Pore Care Ritual';
    if (concern === 'pigmentation') return 'The Targeted Pigmentation Correcting Ritual';
    if (concern === 'dullness') return 'The Vitamin C & Antioxidant Radiance Ritual';
    if (cadence === 'complete') return 'The Complete AM/PM Brightening Ritual';
    return 'The Overnight Brightening & Renewal Ritual';
  }, [isDone, answers]);

  const applicationSteps = React.useMemo(() => {
    if (!isDone) return [];
    const slugs = new Set(recommendedRoutine.map((p) => p.slug));
    const steps: Array<{ label: string; detail: string }> = [];

    if (slugs.has('balancing-serum')) {
      steps.push({
        label: 'Morning / Clarify (Balancing Serum)',
        detail:
          'Apply 2–3 drops to clean, dry skin across face and neck. Start once daily and increase to twice daily as tolerated, followed by moisturizer and daytime sunscreen.',
      });
    }
    if (slugs.has('lumivitac-serum')) {
      steps.push({
        label: 'Morning Radiance (LumiVitaC)',
        detail:
          'Apply 2–3 drops of Vitamin C 10% + Glutathione Serum to clean, dry skin before moisturizer and broad-spectrum sunscreen.',
      });
    }
    if (slugs.has('sepiwhite-serum')) {
      steps.push({
        label: 'Evening Spot Care (Sepiwhite Serum)',
        detail:
          'Apply a few drops to clean, dry face and neck and allow to absorb before moisturizer. Use sunscreen during the daytime.',
      });
    }
    if (slugs.has('clear-tone-serum')) {
      steps.push({
        label: 'Evening Tone Clarity (Clear Tone)',
        detail:
          'Apply 2–3 drops of Kojic Acid 2% + Azelaic Acid Serum to clean, dry skin and gently massage until absorbed. Follow with moisturizer and use daytime sunscreen.',
      });
    }
    if (slugs.has('night-cream')) {
      steps.push({
        label: 'Overnight Renewal (Night Cream)',
        detail:
          'Apply an appropriate amount to clean, dry face and neck every night and massage gently until absorbed, avoiding direct contact with eyes.',
      });
    }

    return steps;
  }, [isDone, recommendedRoutine]);

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-14 lg:py-20 min-h-[70vh]">
      {!isDone ? (
        <div className="mx-auto max-w-2xl">
          <Leaf size={28} strokeWidth={1.2} className="text-[#C3A27B]" />
          <p className="mt-5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
            THE SAN ELYSIA SKIN DIAGNOSTIC
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-[#3D271D]">
            Let’s find{' '}
            <MarkerHighlight immediate delay={0.25} className="italic font-normal text-[#3D271D]">
              your ritual.
            </MarkerHighlight>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[#685346]">
            Answer 4 quick questions to match your skin concern and tolerance with our targeted
            serums and overnight brightening care.
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
          <AnimatePresence mode="wait" custom={direction}>
            <motion.fieldset
              key={step}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.3, ease: LUXURY_EASE }}
              className="mt-10"
            >
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
                    <motion.label
                      key={opt.value}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ duration: 0.18, ease: LUXURY_EASE }}
                      className={`relative flex min-h-[110px] cursor-pointer items-start gap-3 rounded-xs border p-5 transition-colors ${
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
                    </motion.label>
                  );
                })}
              </div>
            </motion.fieldset>
          </AnimatePresence>

          {/* Stepper Buttons */}
          <div className="mt-8 flex justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                setDirection(-1);
                setStep(step - 1);
              }}
              disabled={step === 0}
              className="inline-flex min-h-12 items-center gap-2 border border-[#3D271D]/25 bg-transparent px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#3D271D] rounded-sm hover:border-[#3D271D] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
            >
              <ArrowLeft size={14} /> Back
            </button>
            <button
              type="button"
              onClick={() => {
                setDirection(1);
                setStep(step + 1);
              }}
              disabled={!answers[step]}
              className="inline-flex min-h-12 items-center gap-2 bg-[#5A3825] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FAF7F2] rounded-sm hover:bg-[#3D271D] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              <span>{step === quizQuestions.length - 1 ? 'Discover my ritual' : 'Continue'}</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <p className="mt-8 text-[10px] leading-relaxed text-[#8E7B6F]">
            Your preferences stay private in this session. Always patch test new formulations before
            use and wear sunscreen during the day.
          </p>
        </div>
      ) : (
        /* Results View */
        <div>
          <div className="mx-auto max-w-2xl text-center">
            <Leaf size={32} strokeWidth={1.2} className="mx-auto text-[#C3A27B]" />
            <p className="mt-5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
              TAILORED FOR YOUR SKIN GOALS
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-[#3D271D]">
              {routineTitle}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#685346] max-w-xl mx-auto">
              Based on your responses, here is your recommended SAN ELYSIA combination to help
              improve the appearance of uneven tone, clarity, and overnight hydration.
            </p>
          </div>

          {/* Recommended Product Cards */}
          <div
            className={`mt-12 grid grid-cols-1 gap-6 ${
              recommendedRoutine.length === 1
                ? 'max-w-sm mx-auto'
                : recommendedRoutine.length === 2
                  ? 'sm:grid-cols-2 max-w-2xl mx-auto'
                  : 'sm:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {recommendedRoutine.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Step-by-Step Prescription Plan */}
          <div className="mx-auto mt-12 max-w-2xl border border-[#3D271D]/20 bg-[#F3ECE2]/80 p-8 rounded-xs shadow-xs">
            <h2 className="font-serif text-2xl text-[#3D271D]">Your Daily Application Order</h2>
            <ol className="mt-5 space-y-3.5 text-sm text-[#3D271D] leading-relaxed">
              {applicationSteps.map((s, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-mono text-xs font-semibold text-[#5A3825] pt-0.5">
                    0{idx + 1}.
                  </span>
                  <span>
                    <strong>{s.label}:</strong> {s.detail}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-[#3D271D]/15 pt-4 text-[10px] text-[#8E7B6F] leading-relaxed">
              For external use only. Patch test before use, avoid direct contact with eyes, and
              always use sunscreen during the day.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/shop">
              <Button variant="primary" size="md">
                EXPLORE ALL FORMULATIONS
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
