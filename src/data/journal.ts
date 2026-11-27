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
    slug: 'understanding-niacinamide-12-balancing',
    title: 'Why Niacinamide 12% + Zinc 1% is the cornerstone of daily oil & pore balance.',
    category: 'Ingredients',
    readTime: '4 min read',
    publishedAt: 'November 20, 2026',
    image: '/images/products/balancing-serum.jpg',
    excerpt:
      'How 12% Niacinamide, 1% Zinc PCA, and 0.5% Salicylic Acid work alongside Aloe Vera and Cucumber to balance excess oil without stripping your skin.',
    contentHtml: `
      <p>Oily and combination skin often gets trapped in a cycle of harsh stripping cleansers that only prompt excess sebum rebound. Sustainable clarity comes from regulating oil while supporting the skin barrier.</p>
      <h2>Balanced Clarity Without Tightness</h2>
      <p>In our Balancing Serum, 12% Niacinamide helps minimize the appearance of pores and uneven skin tone while 1% Zinc PCA helps control excess oil and reduce the appearance of blemishes. A gentle 0.5% Hydroxy Acid (Salicylic Acid) exfoliates dead skin cells for smoother-looking texture.</p>
      <p>To keep skin calm and hydrated, the formula includes Alpha Arbutin (0.5%), Aloe Vera Extract, Cucumber Extract, Panthenol, and Allantoin. Start with 2–3 drops on clean, dry skin once daily, increasing to twice daily as tolerated, and always wear sunscreen during the day.</p>
    `,
  },
  {
    slug: 'sepiwhite-alpha-arbutin-pigmentation-care',
    title: 'Sepiwhite™, Alpha Arbutin & Licorice: a gentle guide to targeting dark spots.',
    category: 'Brightening Science',
    readTime: '4 min read',
    publishedAt: 'November 15, 2026',
    image: '/images/products/sepiwhite-serum.jpg',
    excerpt:
      'Why pairing complementary brightening pathways with Pea Seed Extract and Sodium Hyaluronate supports more uniform, radiant-looking skin.',
    contentHtml: `
      <p>Uneven pigmentation and lingering dark spots respond best to steady, consistent care rather than aggressive irritation that can trigger further discoloration.</p>
      <h2>Multi-Botanical Tone Harmony</h2>
      <p>Sepiwhite Serum unites Sepiwhite™ (Undecylenoyl Phenylalanine), Niacinamide, and Alpha Arbutin with Licorice Root Extract to target the appearance of dark spots and promote a more even-looking complexion.</p>
      <p>Enriched with Pea Seed Extract, Quinoa Seed Extract, Cucumber Extract, Panthenol, and Sodium Hyaluronate, it keeps skin hydrated, smooth, and comfortable across all skin types, subject to individual skin tolerance.</p>
    `,
  },
  {
    slug: 'am-antioxidants-pm-renewal-ritual',
    title: 'Morning Vitamin C 10% + Evening Night Cream: syncing care with day and night.',
    category: 'Everyday Rituals',
    readTime: '3 min read',
    publishedAt: 'November 08, 2026',
    image: '/images/products/lumivita-c-serum.jpg',
    excerpt:
      'How antioxidant defense by day and rich overnight nourishment by night help support brighter, smoother, more supple-looking skin.',
    contentHtml: `
      <p>Your skin shifts priorities between sunrise and sleep. During the day, UV exposure and urban stressors call for antioxidant protection; at night, skin focuses on moisture replenishment and tone renewal.</p>
      <h2>The Day & Night Rhythm</h2>
      <ul>
        <li><strong>Morning Radiance:</strong> Apply 2–3 drops of LumiVitaC (Vitamin C 10%, Niacinamide 3%, Alpha Arbutin 2%, Glutathione, and Green Tea Extract) to clean, dry skin, followed by moisturizer and broad-spectrum sunscreen.</li>
        <li><strong>Overnight Renewal:</strong> Massage SAN ELYSIA Night Cream—formulated with Niacinamide, Sepiwhite™, Alpha Arbutin, Kojic Dipalmitate, Glutathione, Sweet Almond Oil, and Sodium Hyaluronate—into clean face and neck every night.</li>
      </ul>
    `,
  },
  {
    slug: 'kojic-azelaic-clarity-guide',
    title: 'Kojic Acid 2% meets Azelaic Acid: clarifying uneven tone and redness.',
    category: 'Skincare Philosophy',
    readTime: '4 min read',
    publishedAt: 'October 28, 2026',
    image: '/images/products/clear-tone-serum.jpg',
    excerpt:
      'Discover how Clear Tone combines Kojic Acid 2%, Azelaic Acid, Camellia Extract, and Hyaluronic Acid to brighten dark spots while soothing skin.',
    contentHtml: `
      <p>Post-blemish marks and uneven patches often arrive hand-in-hand with visible redness. Treating one without calming the other slows down progress.</p>
      <p>Clear Tone pairs Kojic Acid 2% with Azelaic Acid and Niacinamide to visibly address dark spots and blemishes, while Licorice Extract, Camellia Sinensis Leaf Extract, and Sodium Hyaluronate deliver soothing antioxidant moisture for a clear, radiant, and even-looking complexion.</p>
    `,
  },
];
