'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { journalPosts, JournalPost } from '@/data/journal';

const categories = [
  'All Articles',
  'Ingredients',
  'Brightening Science',
  'Everyday Rituals',
  'Skincare Philosophy',
];

export function JournalIndexView() {
  const [selectedCategory, setSelectedCategory] = React.useState('All Articles');

  const filteredPosts = React.useMemo(() => {
    if (selectedCategory === 'All Articles') return journalPosts;
    return journalPosts.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-14 lg:py-20">
      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
        NOTES FOR A SOFTER EVERYDAY
      </p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#3D271D]">
          The skin <span className="marker italic font-normal text-[#3D271D]">journal.</span>
        </h1>
        <p className="max-w-[420px] text-sm leading-relaxed text-[#685346]">
          A sanctuary for thoughtful skincare, barrier biology, and the small art of caring for
          yourself without rush. Put the kettle on. Stay a little.
        </p>
      </div>

      {/* Category Tabs */}
      <nav
        aria-label="Journal categories"
        className="mt-10 flex flex-wrap gap-x-7 gap-y-2 border-b border-[#3D271D]/20"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`min-h-12 border-b-2 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer ${
              selectedCategory === cat
                ? 'border-[#3D271D] text-[#3D271D]'
                : 'border-transparent text-[#8E7B6F] hover:text-[#3D271D]'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Articles Grid */}
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="group flex flex-col justify-between">
            <Link href={`/journal/${post.slug}`} className="block">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm bg-[#F3ECE2] border border-[#E7DDD2]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-center justify-between text-[9px] font-sans font-medium uppercase tracking-[0.16em]">
                <span className="text-[#3D271D]">{post.category}</span>
                <span className="text-[#8E7B6F]">{post.readTime}</span>
              </div>
              <h2 className="mt-3 font-serif text-2xl text-[#3D271D] group-hover:text-[#5A3825] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-[#685346] line-clamp-3">
                {post.excerpt}
              </p>
              <span className="inline-flex min-h-9 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3D271D] mt-4 group-hover:translate-x-1 transition-transform">
                Read note <ArrowUpRight size={14} />
              </span>
            </Link>
          </article>
        ))}
      </div>

      {/* Advisory */}
      <p className="mt-16 border-t border-[#3D271D]/15 pt-6 text-[10px] leading-relaxed text-[#8E7B6F]">
        Our journal shares educational skincare philosophy and barrier wellness guidance, not clinical
        medical advice. For persistent dermatological conditions, speak to a qualified dermatologist.
      </p>
    </div>
  );
}
