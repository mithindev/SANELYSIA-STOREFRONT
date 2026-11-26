'use client';

import * as React from 'react';
import Link from 'next/link';
import { Star, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { reviews, ReviewItem } from '@/data/reviews';
import { Button } from '@/components/ui/button';

export default function ReviewsPage() {
  const [filterProduct, setFilterProduct] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('newest');
  const [showSubmitModal, setShowSubmitModal] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const filteredReviews = React.useMemo(() => {
    return reviews
      .filter((r) => filterProduct === 'all' || r.productTitle.includes(filterProduct))
      .sort((a, b) => {
        if (sortBy === 'highest') return b.rating - a.rating;
        return 0; // newest
      });
  }, [filterProduct, sortBy]);

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-14 lg:py-20">
      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
        COMMUNITY VOICES
      </p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#3D271D]">
            Community <span className="marker italic font-normal text-[#3D271D]">stories.</span>
          </h1>
          <p className="mt-3 text-sm text-[#685346] max-w-md leading-relaxed">
            Honest reflections from everyday people caring for their skin with intention and balance.
          </p>
        </div>

        <button
          onClick={() => setShowSubmitModal(true)}
          className="inline-flex min-h-12 items-center gap-2 bg-[#5A3825] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FAF7F2] rounded-sm hover:bg-[#3D271D] cursor-pointer"
        >
          <span>Share your experience</span>
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Analytics & Filters Bar */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-y border-[#3D271D]/20 py-6">
        <div className="flex items-center gap-4">
          <span className="font-serif text-4xl text-[#3D271D]">5.0</span>
          <div>
            <div className="flex text-[#C3A27B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#C3A27B]" />
              ))}
            </div>
            <p className="text-xs text-[#8E7B6F] mt-1">Based on {reviews.length} verified reviews</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={filterProduct}
            onChange={(e) => setFilterProduct(e.target.value)}
            className="h-11 border border-[#3D271D]/20 bg-[#FFFDF9] px-3 text-xs text-[#3D271D] rounded-xs outline-none cursor-pointer"
          >
            <option value="all">All products</option>
            <option value="Balancing Serum">Dew Drops Balancing Serum</option>
            <option value="Cleanser">Soft Start Cleanser</option>
            <option value="Moisturizer">Cloud Nine Moisturizer</option>
            <option value="Magnesium">Daily Balance Magnesium</option>
            <option value="Ritual">Everyday Ritual Bundle</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-11 border border-[#3D271D]/20 bg-[#FFFDF9] px-3 text-xs text-[#3D271D] rounded-xs outline-none cursor-pointer"
          >
            <option value="newest">Newest first</option>
            <option value="highest">Highest rated</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="divide-y divide-[#3D271D]/20">
        {filteredReviews.map((rev) => (
          <article key={rev.id} className="grid gap-6 py-10 sm:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-serif text-2xl text-[#3D271D]">{rev.name}</p>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-[#8E7B6F]">
                <Check size={14} className="text-[#5A3825]" />
                <span>Verified Purchaser</span>
              </div>
              <p className="mt-1 text-[11px] text-[#685346]">{rev.skinType}</p>
              <p className="mt-3 text-[10px] text-[#8E7B6F] uppercase tracking-wider">
                {rev.productTitle}
              </p>
            </div>

            <div>
              <div className="flex text-[#C3A27B] mb-2">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#C3A27B]" />
                ))}
              </div>
              <h2 className="font-serif text-xl text-[#3D271D] font-normal">{rev.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#685346]">{rev.body}</p>
              <p className="mt-4 text-[10px] text-[#8E7B6F] uppercase tracking-wider">{rev.date}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Review submission modal */}
      {showSubmitModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3D271D]/40 backdrop-blur-xs"
        >
          <div className="w-full max-w-lg bg-[#FAF7F2] border border-[#E7DDD2] p-8 rounded-sm shadow-2xl space-y-5">
            <h2 className="font-serif text-2xl text-[#3D271D]">Share your ritual story</h2>
            {formSubmitted ? (
              <div className="text-center py-6">
                <Check size={32} className="text-[#5A3825] mx-auto mb-2" />
                <p className="font-serif text-xl text-[#3D271D]">Thank you for your review.</p>
                <p className="text-xs text-[#685346] mt-2">
                  Your reflection has been submitted and will appear shortly after moderation.
                </p>
                <button
                  onClick={() => {
                    setShowSubmitModal(false);
                    setFormSubmitted(false);
                  }}
                  className="mt-6 text-xs uppercase tracking-wider underline text-[#3D271D]"
                >
                  Close window
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#3D271D] mb-1">
                    Your Name
                  </label>
                  <input
                    required
                    placeholder="e.g. Priya K."
                    className="w-full border border-[#3D271D]/20 bg-[#FFFDF9] p-3 text-xs outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#3D271D] mb-1">
                    Product Used
                  </label>
                  <select className="w-full border border-[#3D271D]/20 bg-[#FFFDF9] p-3 text-xs outline-none">
                    <option>Dew Drops Botanical Balancing Serum</option>
                    <option>Soft Start Nourishing Cream Cleanser</option>
                    <option>Cloud Nine Ceramide Barrier Cream</option>
                    <option>The Complete Everyday Glow Ritual</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#3D271D] mb-1">
                    Your Experience
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How does your skin feel? What did you notice?"
                    className="w-full border border-[#3D271D]/20 bg-[#FFFDF9] p-3 text-xs outline-none"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 text-xs uppercase text-[#8E7B6F]"
                  >
                    Cancel
                  </button>
                  <Button type="submit" variant="primary" size="sm">
                    SUBMIT STORY
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
