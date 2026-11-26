export interface JournalPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  publishedAt: string;
  image: string;
  contentHtml: string;
}

export const journalPosts: JournalPost[] = [
  {
    slug: 'the-art-of-skin-balance',
    title: 'The gentle art of skin balance: why less is usually more.',
    category: 'Skincare Philosophy',
    readTime: '4 min read',
    publishedAt: 'November 20, 2026',
    image: '/images/hero/hero-ritual-model.jpg',
    excerpt:
      'In a beauty landscape obsessed with 12-step routines and aggressive exfoliation, true clarity often comes from stepping back and honoring your skin’s innate wisdom.',
    contentHtml: `
      <p>There is a quiet revolution happening in modern skincare: the realization that doing more is often the very thing preventing our skin from reaching equilibrium.</p>
      <p>When the skin barrier is stripped by frequent acid peels, foaming surfactants, and incompatible layering, it responds with paradoxical behavior: feeling simultaneously tight yet prone to midday oiliness, redness, and unpredictable breakouts.</p>
      <h2>The Principle of Biocompatibility</h2>
      <p>At SAN ELYSIA, every formulation begins with a simple question: does this ingredient cooperate with human skin biology? Instead of overwhelming the skin with dozens of conflicting actives, we focus on clinical essentials—like 12% Niacinamide and biomimetic Ceramides—that your skin naturally understands how to utilize.</p>
      <p>When you simplify your routine down to a gentle cleanser, a targeted balancing serum, and a barrier-identical moisturizer, you give your skin the space it needs to regulate itself.</p>
    `,
  },
  {
    slug: 'morning-rituals-for-clear-skin',
    title: 'Morning rituals: how to start slow and glow all day.',
    category: 'Everyday Rituals',
    readTime: '3 min read',
    publishedAt: 'November 15, 2026',
    image: '/images/hero/hero-product-frame.jpg',
    excerpt:
      'How five intentional minutes each morning can ground your nervous system and create lasting radiant hydration.',
    contentHtml: `
      <p>How we spend the first half-hour of our morning sets the cadence for our thoughts, our stress levels, and even our hormone balance throughout the day.</p>
      <p>Rushing through your morning skincare as a chore creates a hurried mental state. But when you transform those few minutes into an intentional sensory ritual—feeling the lukewarm water against your face, inhaling the gentle botanical aroma, and pressing warm serum into your cheeks—skincare becomes an act of grounding meditation.</p>
      <h2>A 3-Minute Morning Blueprint</h2>
      <ul>
        <li><strong>Step 1:</strong> Cleanse gently with Soft Start Cream Cleanser. Never scrub.</li>
        <li><strong>Step 2:</strong> Press 3–4 drops of Dew Drops Balancing Serum into damp skin.</li>
        <li><strong>Step 3:</strong> Seal with Cloud Nine Barrier Cream and finish with broad-spectrum SPF 30+.</li>
      </ul>
    `,
  },
  {
    slug: 'understanding-niacinamide',
    title: 'Why Niacinamide 12% is the cornerstone of daily skin balance.',
    category: 'Ingredients',
    readTime: '5 min read',
    publishedAt: 'November 8, 2026',
    image: '/images/hero/san-elysia-serum-cutout.webp',
    excerpt:
      'The science behind Vitamin B3: how this clinically studied active clarifies pores, tames redness, and supports barrier lipids.',
    contentHtml: `
      <p>Few skincare ingredients have amassed as much rigorous dermatological backing as Niacinamide (Vitamin B3). Unlike harsh acids that rely on forced cell turnover, Niacinamide works as an enzymatic co-factor inside our living skin cells.</p>
      <p>At our optimized 12% concentration, Niacinamide visibly reduces the appearance of stretched pores, normalizes excess sebum secretion, and prevents melanin transfer to lighten stubborn dark spots.</p>
    `,
  },
  {
    slug: 'rest-as-skincare',
    title: 'Rest as skincare: the nervous system connection.',
    category: 'Wellness',
    readTime: '4 min read',
    publishedAt: 'October 28, 2026',
    image: '/images/hero/product-bottle.jpg',
    excerpt:
      'Why nighttime cellular repair depends on quality deep sleep, and how magnesium supports your skin’s evening restorative cycle.',
    contentHtml: `
      <p>Your skin does the majority of its repairing, detoxifying, and collagen synthesis between the hours of 10 PM and 2 AM. When cortisol remains elevated from late-night screens or daily stress, blood flow is diverted away from the dermal matrix.</p>
      <p>Supplementing with bioavailable magnesium bisglycinate alongside an evening warm mineral soak lowers parasympathetic tension, preparing both body and skin for deep restorative slumber.</p>
    `,
  },
];
