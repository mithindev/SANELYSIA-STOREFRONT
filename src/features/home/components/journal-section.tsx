import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { journalPosts } from '@/data/journal';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion';

export function JournalSection() {
  const posts = journalPosts.slice(0, 3);

  return (
    <section id="journal" className="relative overflow-hidden border-b border-[#3D271D]/15 py-20 lg:py-24 bg-[#FAF7F2]">
      {/* Outer Left Edge Vertical Caption Rail */}
      <div
        aria-hidden="true"
        className="caption-rail pointer-events-none absolute left-5 top-0 hidden h-full items-center xl:flex select-none z-10"
      >
        <span
          className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#8E7B6F]/70 whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          N°06 — THE SKIN JOURNAL
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
                Notes for a softer everyday
              </p>
              <h2 className="mt-3 font-serif text-4xl lg:text-5xl font-medium tracking-tight text-[#3D271D]">
                A little inspiration.
              </h2>
            </div>
            <Link
              href="/journal"
              className="group inline-flex min-h-11 items-center gap-2 border-b border-[#3D271D]/30 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3D271D] transition-colors hover:border-[#3D271D]"
            >
              <span>From the skin journal</span>
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-9 md:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="group">
                <Link href={`/journal/${post.slug}`} className="block">
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm bg-[#F3ECE2] border border-[#E7DDD2]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-5 flex items-center justify-between text-[9px] font-sans font-medium uppercase tracking-[0.16em]">
                    <span className="text-[#3D271D]">{post.category}</span>
                    <span className="text-[#8E7B6F]">{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-[22px] leading-snug text-[#3D271D] group-hover:text-[#5A3825] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#685346] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex min-h-9 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3D271D] mt-3 group-hover:translate-x-1 transition-transform">
                    A moment to read <ArrowUpRight size={14} />
                  </span>
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
