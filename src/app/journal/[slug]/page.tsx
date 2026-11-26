import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { journalPosts } from '@/data/journal';

interface JournalArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export default async function JournalArticlePage({ params }: JournalArticlePageProps) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = journalPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-12 lg:py-18">
      {/* Back link */}
      <Link
        href="/journal"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3D271D] hover:text-[#5A3825] mb-8"
      >
        <ArrowLeft size={14} /> Back to Skin Journal
      </Link>

      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 text-xs font-sans text-[#8E7B6F] uppercase tracking-widest">
          <span className="font-semibold text-[#5A3825]">{post.category}</span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} /> {post.readTime}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Calendar size={13} /> {post.publishedAt}
          </span>
        </div>

        <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#3D271D] leading-tight">
          {post.title}
        </h1>

        <p className="mt-5 text-base sm:text-lg text-[#685346] leading-relaxed font-serif italic border-l-2 border-[#C3A27B] pl-4">
          “{post.excerpt}”
        </p>

        {/* Feature Image */}
        <div className="my-10 relative aspect-[16/9] w-full rounded-sm overflow-hidden bg-[#F3ECE2] border border-[#E7DDD2] shadow-md">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <div
          className="text-sm leading-relaxed text-[#685346] space-y-5 font-sans"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Author sign-off */}
        <div className="mt-12 border-t border-[#3D271D]/15 pt-8 flex items-center justify-between">
          <div>
            <p className="font-serif text-lg text-[#3D271D]">SAN ELYSIA Formulation Labs</p>
            <p className="text-xs text-[#8E7B6F]">Thoughtful skincare science for everyday glow.</p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#3D271D] hover:text-[#5A3825] font-semibold underline underline-offset-4"
          >
            <span>Explore rituals</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* Next Notes */}
      {related.length > 0 && (
        <div className="mt-20 pt-12 border-t border-[#3D271D]/15 max-w-4xl mx-auto">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
            CONTINUE READING
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/journal/${r.slug}`}
                className="border border-[#3D271D]/15 bg-[#F3ECE2]/40 p-6 rounded-xs hover:border-[#3D271D] transition-colors block group"
              >
                <span className="text-[9px] uppercase tracking-widest text-[#8E7B6F]">{r.category}</span>
                <h3 className="font-serif text-xl text-[#3D271D] mt-2 group-hover:text-[#5A3825]">
                  {r.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-[#3D271D] mt-3">
                  Read article <ArrowUpRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
