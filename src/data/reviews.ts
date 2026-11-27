export interface ReviewItem {
  id: string;
  name: string;
  verified: boolean;
  rating: number;
  productSlug: string;
  productTitle: string;
  skinType: string;
  date: string;
  title: string;
  body: string;
}

export const reviews: ReviewItem[] = [
  {
    id: 'rev_1',
    name: 'Ananya Sharma',
    verified: true,
    rating: 5,
    productSlug: 'balancing-serum',
    productTitle: 'Balancing Serum',
    skinType: 'Oily / Combination Skin',
    date: 'November 18, 2026',
    title: 'Visibly balanced my T-zone shine without drying out my skin.',
    body:
      'I started using Balancing Serum once daily on clean, dry skin as directed and built up to twice a day. The 12% Niacinamide and 1% Zinc PCA keep midday oiliness controlled, and the Aloe Vera and Cucumber keep it comfortable.',
  },
  {
    id: 'rev_2',
    name: 'Rohan Mehta',
    verified: true,
    rating: 5,
    productSlug: 'lumivitac-serum',
    productTitle: 'LumiVitaC',
    skinType: 'Normal / Dull Skin',
    date: 'November 14, 2026',
    title: 'Noticeable morning brightness without feeling sticky.',
    body:
      'LumiVitaC layers seamlessly under moisturizer and sunscreen. Pairing 10% Vitamin C with Glutathione and Alpha Arbutin really helped perk up dullness around my cheeks within a few weeks.',
  },
  {
    id: 'rev_3',
    name: 'Dr. Meera Iyer',
    verified: true,
    rating: 5,
    productSlug: 'sepiwhite-serum',
    productTitle: 'Sepiwhite Serum',
    skinType: 'All Skin Types / Hyperpigmentation',
    date: 'November 09, 2026',
    title: 'Thoughtful multi-pathway brightening with comforting hydration.',
    body:
      'Combining Sepiwhite, Niacinamide, Alpha Arbutin, and Licorice Extract alongside Pea Seed Extract and Sodium Hyaluronate makes this serum both gentle and thorough on stubborn uneven patches.',
  },
  {
    id: 'rev_4',
    name: 'Kavita Menon',
    verified: true,
    rating: 5,
    productSlug: 'clear-tone-serum',
    productTitle: 'Clear Tone',
    skinType: 'Blemish & Post-Mark Prone',
    date: 'November 02, 2026',
    title: 'Calm, even-looking tone thanks to Kojic Acid 2% + Azelaic Acid.',
    body:
      'Clear Tone helped fade lingering post-blemish spots while Azelaic Acid and Camellia Extract kept redness calm. Just 2–3 drops at night before moisturizer goes a long way.',
  },
  {
    id: 'rev_5',
    name: 'Siddharth Rao',
    verified: true,
    rating: 5,
    productSlug: 'night-cream',
    productTitle: 'Night Cream',
    skinType: 'Dry to Combination Skin',
    date: 'October 27, 2026',
    title: 'Rich overnight nourishment that leaves skin soft and refreshed.',
    body:
      'The Sweet Almond Oil and Sodium Hyaluronate in the Night Cream keep my face supple through AC nights, while Niacinamide, Kojic Dipalmitate, and Glutathione help my tone look clearer by morning.',
  },
];
