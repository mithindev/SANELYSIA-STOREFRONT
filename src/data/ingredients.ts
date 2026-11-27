export interface Ingredient {
  slug: string;
  name: string;
  annotation: string;
  benefit: string;
  description: string;
  benefitsList: string[];
  foundInSlugs: string[];
  foundIn: string[];
}

export const ingredients: Ingredient[] = [
  {
    slug: 'niacinamide',
    name: 'Niacinamide (Vitamin B3)',
    annotation: 'MULTI-TASKING BARRIER ACTIVE · 3%–12%',
    benefit: 'Supports an even-looking skin tone, refines pores, and strengthens the skin barrier.',
    description:
      'Found across every SAN ELYSIA formulation—from 3% in LumiVitaC for tone harmony up to 12% in our Balancing Serum—Niacinamide helps calm blemishes, visibly minimize enlarged pores, and reinforce skin barrier resilience.',
    benefitsList: [
      'Helps improve uneven skin tone and visibly brighten the complexion',
      'Minimizes the appearance of enlarged pores and balances surface texture',
      'Helps reduce the appearance of blemishes and redness',
      'Supports natural barrier strength and comfort across skin types',
    ],
    foundInSlugs: [
      'balancing-serum',
      'sepiwhite-serum',
      'clear-tone-serum',
      'lumivitac-serum',
      'night-cream',
    ],
    foundIn: [
      'Balancing Serum',
      'Sepiwhite Serum',
      'Clear Tone',
      'LumiVitaC',
      'Night Cream',
    ],
  },
  {
    slug: 'sepiwhite',
    name: 'Sepiwhite™ (Undecylenoyl Phenylalanine)',
    annotation: 'TARGETED PIGMENTATION BRIGHTENER',
    benefit: 'Helps improve the appearance of dark spots and promotes a more uniform-looking complexion.',
    description:
      'An amino-acid-derived brightening molecule featured in both Sepiwhite Serum and our Intensive Brightening Night Cream. Sepiwhite™ works gently alongside Niacinamide and Alpha Arbutin to target stubborn uneven pigmentation.',
    benefitsList: [
      'Helps reduce the appearance of dark spots and localized pigmentation',
      'Promotes a clearer, more uniform-looking skin tone',
      'Pairs synergistically with Alpha Arbutin and Kojic Dipalmitate',
    ],
    foundInSlugs: ['sepiwhite-serum', 'night-cream'],
    foundIn: ['Sepiwhite Serum', 'Night Cream'],
  },
  {
    slug: 'alpha-arbutin',
    name: 'Alpha Arbutin',
    annotation: 'TYROSINASE-TARGETING BRIGHTENER · 0.5%–2%',
    benefit: 'Helps fade the appearance of dark spots and pigmentation for a brighter complexion.',
    description:
      'A gentle yet targeted brightening active included at 2% in LumiVitaC, 0.5% in Balancing Serum, and blended into Sepiwhite Serum and Night Cream to address uneven tone without harsh irritation.',
    benefitsList: [
      'Helps reduce the appearance of stubborn dark spots and post-blemish marks',
      'Promotes a brighter, more even-looking complexion',
      'Suitable for gradual daily use when paired with daytime sunscreen',
    ],
    foundInSlugs: ['lumivitac-serum', 'sepiwhite-serum', 'balancing-serum', 'night-cream'],
    foundIn: ['LumiVitaC', 'Sepiwhite Serum', 'Balancing Serum', 'Night Cream'],
  },
  {
    slug: 'kojic-acid',
    name: 'Kojic Acid & Kojic Dipalmitate',
    annotation: 'BRIGHTENING ACTIVE · 2% IN CLEAR TONE',
    benefit: 'Helps reduce the appearance of dark spots and promotes a brighter-looking skin tone.',
    description:
      'We tailor our Kojic actives by base: water-soluble Kojic Acid 2% powers Clear Tone Serum for fast-absorbing spot clarity, while oil-stable Kojic Dipalmitate delivers gentle overnight radiance inside our Night Cream.',
    benefitsList: [
      'Helps fade the appearance of dark spots and uneven pigmentation',
      'Supports a visibly brighter, more luminous complexion',
      'Complements Azelaic Acid and Licorice Extract for balanced clarity',
    ],
    foundInSlugs: ['clear-tone-serum', 'night-cream'],
    foundIn: ['Clear Tone', 'Night Cream'],
  },
  {
    slug: 'azelaic-acid',
    name: 'Azelaic Acid',
    annotation: 'CLARIFYING & SOOTHING ACID',
    benefit: 'Helps improve uneven skin tone, reduce blemishes, and calm visible redness.',
    description:
      'Paired with Kojic Acid 2% in Clear Tone, Azelaic Acid addresses both tone irregularity and blemish-prone texture while remaining soothing for sensitive-leaning complexions.',
    benefitsList: [
      'Helps soothe skin and reduce the appearance of redness and irritation',
      'Targets blemishes and uneven surface tone simultaneously',
      'Works harmoniously with Niacinamide and Licorice Root Extract',
    ],
    foundInSlugs: ['clear-tone-serum'],
    foundIn: ['Clear Tone'],
  },
  {
    slug: 'vitamin-c',
    name: 'Vitamin C (Ascorbic Acid)',
    annotation: 'ANTIOXIDANT RADIANCE ACTIVE · 10%',
    benefit: 'Helps brighten dull-looking skin, fade dark spots, and shield against oxidative stress.',
    description:
      'Formulated at 10% Ascorbic Acid in LumiVitaC alongside Glutathione and Alpha Arbutin 2%, Vitamin C supports daytime antioxidant defense and visibly awakens tired, uneven skin.',
    benefitsList: [
      'Helps brighten dull-looking skin for a glowing complexion',
      'Provides antioxidant protection against environmental damage',
      'Helps reduce the appearance of dark spots and uneven tone',
    ],
    foundInSlugs: ['lumivitac-serum'],
    foundIn: ['LumiVitaC'],
  },
  {
    slug: 'glutathione',
    name: 'Glutathione',
    annotation: 'MASTER ANTIOXIDANT PEPTIDE',
    benefit: 'An antioxidant active that supports brighter, radiant-looking skin.',
    description:
      'A tripeptide antioxidant featured in both LumiVitaC and our Night Cream. Glutathione helps defend against oxidative stressors while supporting overall luminosity and even-toned skin.',
    benefitsList: [
      'Provides antioxidant support against daily environmental stressors',
      'Supports brighter, more radiant-looking skin day and night',
      'Enhances multi-active brightening blends alongside Vitamin C and Kojic Dipalmitate',
    ],
    foundInSlugs: ['lumivitac-serum', 'night-cream'],
    foundIn: ['LumiVitaC', 'Night Cream'],
  },
  {
    slug: 'zinc-pca',
    name: 'Zinc PCA',
    annotation: 'SEBUM-BALANCING MINERAL · 1%',
    benefit: 'Helps control excess oil and reduce the appearance of acne and blemishes.',
    description:
      'Combined at 1% with 12% Niacinamide in our Balancing Serum, Zinc PCA regulates surface sebum and helps keep oily and combination complexions fresh without stripping.',
    benefitsList: [
      'Helps balance excess sebum and daytime shine',
      'Reduces the appearance of blemishes and congestion',
      'Supports comfortable hydration for oily and combination skin',
    ],
    foundInSlugs: ['balancing-serum'],
    foundIn: ['Balancing Serum'],
  },
  {
    slug: 'salicylic-acid',
    name: 'Salicylic Acid (Beta Hydroxy Acid)',
    annotation: 'GENTLE EXFOLIATING BHA · 0.5%',
    benefit: 'Helps exfoliate dead skin cells and refine skin texture for smoother-looking skin.',
    description:
      'Included at a gentle 0.5% concentration in Balancing Serum (listed as Hydroxy Acid in key actives), Salicylic Acid keeps pores clear of buildup and promotes smoother skin texture.',
    benefitsList: [
      'Gently lifts away dead skin cells and surface congestion',
      'Refines the look of enlarged pores and uneven texture',
      'Balanced with Aloe Vera, Panthenol, and Allantoin to minimize dryness',
    ],
    foundInSlugs: ['balancing-serum'],
    foundIn: ['Balancing Serum'],
  },
  {
    slug: 'sodium-hyaluronate',
    name: 'Hyaluronic Acid (Sodium Hyaluronate)',
    annotation: 'MOISTURE-BINDING HUMECTANT',
    benefit: 'Helps attract and retain moisture, keeping skin hydrated, plump, and smooth.',
    description:
      'Included across Night Cream, Sepiwhite Serum, and Clear Tone, Sodium Hyaluronate draws moisture into the upper skin layers so brightening actives feel cushiony and supple.',
    benefitsList: [
      'Attracts and retains essential skin hydration',
      'Leaves skin feeling plump, soft, and smooth',
      'Buffers active brightening formulas against dryness',
    ],
    foundInSlugs: ['night-cream', 'sepiwhite-serum', 'clear-tone-serum'],
    foundIn: ['Night Cream', 'Sepiwhite Serum', 'Clear Tone'],
  },
  {
    slug: 'licorice-extract',
    name: 'Licorice Root Extract (Glycyrrhiza Glabra)',
    annotation: 'SOOTHING BOTANICAL BRIGHTENER',
    benefit: 'Helps soothe the skin while fading the appearance of dark spots and uneven tone.',
    description:
      'A time-honored botanical extract featured in Sepiwhite Serum and Clear Tone. Licorice root calms stressed skin while supporting clearer, brighter tone parity.',
    benefitsList: [
      'Helps fade the appearance of dark spots and discoloration',
      'Calms and soothes skin prone to uneven redness',
      'Enhances gentle daily tolerance of brightening serums',
    ],
    foundInSlugs: ['sepiwhite-serum', 'clear-tone-serum'],
    foundIn: ['Sepiwhite Serum', 'Clear Tone'],
  },
  {
    slug: 'green-tea-camellia',
    name: 'Green Tea / Camellia Sinensis Extract',
    annotation: 'ANTIOXIDANT BOTANICAL LEAF',
    benefit: 'Provides antioxidant protection and helps soothe redness and environmental stress.',
    description:
      'Featured in both LumiVitaC (Green Tea Extract) and Clear Tone (Camellia Sinensis Leaf Extract), this polyphenol-rich botanical helps calm visible redness and protect against daily environmental stressors.',
    benefitsList: [
      'Provides antioxidant protection against environmental stressors',
      'Helps soothe and nourish reactive or dull skin',
      'Supports visible reduction in redness and irritation',
    ],
    foundInSlugs: ['clear-tone-serum', 'lumivitac-serum'],
    foundIn: ['Clear Tone', 'LumiVitaC'],
  },
  {
    slug: 'pea-quinoa-extracts',
    name: 'Pea Seed & Quinoa Seed Extracts',
    annotation: 'BOTANICAL FIRMING & NOURISHING COMPLEX',
    benefit: 'Helps support skin firmness, hydration, and a youthful-looking appearance.',
    description:
      'Unique to Sepiwhite Serum, Pisum Sativum (Pea) Seed Extract and Chenopodium Quinoa Seed Extract nourish, hydrate, and cushion the skin barrier alongside targeted pigmentation actives.',
    benefitsList: [
      'Supports skin firmness and a smooth, youthful-looking appearance',
      'Nourishes and hydrates delicate skin',
      'Protects overall skin softness during tone-correcting care',
    ],
    foundInSlugs: ['sepiwhite-serum'],
    foundIn: ['Sepiwhite Serum'],
  },
  {
    slug: 'aloe-cucumber-soothers',
    name: 'Aloe Vera, Cucumber & Panthenol Complex',
    annotation: 'CALMING HYDRATION BOTANICALS',
    benefit: 'Helps refresh, hydrate, and calm the skin during daily active skincare.',
    description:
      'Cucumber Fruit Extract, Aloe Barbadensis Leaf Extract, Panthenol, and Allantoin buffer our active serums so high-strength Niacinamide and pigmentation actives stay soothing and comfortable.',
    benefitsList: [
      'Refreshes and hydrates skin immediately upon application',
      'Helps calm visible redness and everyday skin sensitivity',
      'Supports comfortable daily use of 12% Niacinamide and Salicylic Acid',
    ],
    foundInSlugs: ['balancing-serum', 'sepiwhite-serum'],
    foundIn: ['Balancing Serum', 'Sepiwhite Serum'],
  },
  {
    slug: 'sweet-almond-oil',
    name: 'Sweet Almond Oil (Prunus Amygdalus Dulcis)',
    annotation: 'NOURISHING OVERNIGHT EMOLLIENT',
    benefit: 'Nourishes and softens the skin to replenish overnight moisture.',
    description:
      'Rich in skin-conditioning fatty acids, Sweet Almond Oil anchors our Intensive Brightening Night Cream to replenish overnight moisture and leave skin soft, supple, and refreshed by morning.',
    benefitsList: [
      'Deeply nourishes dry or tired skin overnight',
      'Helps improve skin softness and suppleness',
      'Complements Sodium Hyaluronate to lock in moisture',
    ],
    foundInSlugs: ['night-cream'],
    foundIn: ['Night Cream'],
  },
];
