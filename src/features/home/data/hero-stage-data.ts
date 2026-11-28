export type IngredientArtKind =
  | 'photo'
  | 'kojic-rice'
  | 'azelaic-grain'
  | 'licorice-root'
  | 'salicylic-willow'
  | 'aloe-cucumber'
  | 'pea-quinoa'
  | 'sweet-almond'
  | 'hyaluronic-drop';

export interface HeroIngredientCardSpec {
  id: string;
  name: string;
  concentration?: string;
  actionTag: string;
  ingredientSlug: string;
  artKind: IngredientArtKind;
  imageSrc?: string;
  accentHex: string;
}

export interface HeroBottleSpec {
  slug: string;
  productId: string;
  title: string;
  packagingLabel: string;
  volumeLabel: string;
  formattedPrice: string;
  formulaSummary: string;
  cutoutSrc: string;
  cutoutWidth: number;
  cutoutHeight: number;
  auraHex: string;
  splashHueTint: string;
  /** Desktop resting position inside podium stage */
  restLayout: {
    leftPercent: number;
    bottomPx: number;
    heightPx: number;
    zIndex: number;
    tiltDeg: number;
  };
  /** 4 curated active ingredient splash cards */
  splashIngredients: [
    HeroIngredientCardSpec,
    HeroIngredientCardSpec,
    HeroIngredientCardSpec,
    HeroIngredientCardSpec,
  ];
}

export interface HeroConcernCardSpec {
  id: string;
  labelLine1: string;
  labelLine2?: string;
  imageSrc: string;
  alt: string;
  targetProductSlug: string;
  reticuleOffset: { cx: number; cy: number; r: number };
}

export const HERO_BOTTLE_SPECS: HeroBottleSpec[] = [
  {
    slug: 'balancing-serum',
    productId: 'prod_balancing_serum',
    title: 'Balancing Serum',
    packagingLabel: 'Niacinamide 12% + Zinc 1%',
    volumeLabel: '30 ML',
    formattedPrice: '₹1,450',
    formulaSummary: 'Oil Control · Pore Care · Barrier Support',
    cutoutSrc: '/images/hero/bottles/balancing-serum.png',
    cutoutWidth: 292,
    cutoutHeight: 908,
    auraHex: '#5B8A68',
    splashHueTint: 'rgba(91, 138, 104, 0.24)',
    restLayout: {
      leftPercent: 16,
      bottomPx: 106,
      heightPx: 230,
      zIndex: 14,
      tiltDeg: -1.5,
    },
    splashIngredients: [
      {
        id: 'bal-niacinamide',
        name: 'Niacinamide',
        concentration: '12%',
        actionTag: 'REFINES PORES',
        ingredientSlug: 'niacinamide',
        artKind: 'photo',
        imageSrc: '/images/ingredients/niacinamide.jpg',
        accentHex: '#C3A27B',
      },
      {
        id: 'bal-zinc',
        name: 'Zinc PCA',
        concentration: '1%',
        actionTag: 'BALANCES OIL',
        ingredientSlug: 'zinc-pca',
        artKind: 'photo',
        imageSrc: '/images/ingredients/zinc-pca.jpg',
        accentHex: '#5B8A68',
      },
      {
        id: 'bal-salicylic',
        name: 'Salicylic Acid',
        concentration: '0.5%',
        actionTag: 'SMOOTHES',
        ingredientSlug: 'salicylic-acid',
        artKind: 'salicylic-willow',
        accentHex: '#5B8A68',
      },
      {
        id: 'bal-aloe',
        name: 'Aloe & Cucumber',
        actionTag: 'SOOTHES',
        ingredientSlug: 'aloe-cucumber-soothers',
        artKind: 'aloe-cucumber',
        accentHex: '#6F9F7B',
      },
    ],
  },
  {
    slug: 'lumivitac-serum',
    productId: 'prod_lumivitac_serum',
    title: 'LumiVitaC',
    packagingLabel: 'Vitamin C 10% + Glutathione',
    volumeLabel: '30 ML',
    formattedPrice: '₹1,650',
    formulaSummary: 'Antioxidant Radiance · Brightening Glow',
    cutoutSrc: '/images/hero/bottles/lumivitac.png',
    cutoutWidth: 279,
    cutoutHeight: 770,
    auraHex: '#D97228',
    splashHueTint: 'rgba(217, 114, 40, 0.24)',
    restLayout: {
      leftPercent: 34,
      bottomPx: 158,
      heightPx: 244,
      zIndex: 22,
      tiltDeg: -0.6,
    },
    splashIngredients: [
      {
        id: 'lumi-vitc',
        name: 'Vitamin C',
        concentration: '10%',
        actionTag: 'BRIGHTENS',
        ingredientSlug: 'vitamin-c',
        artKind: 'photo',
        imageSrc: '/images/ingredients/vitamin-c.jpg',
        accentHex: '#D97228',
      },
      {
        id: 'lumi-glutathione',
        name: 'Glutathione',
        actionTag: 'RADIANCE',
        ingredientSlug: 'glutathione',
        artKind: 'photo',
        imageSrc: '/images/ingredients/glutathione.jpg',
        accentHex: '#D2984A',
      },
      {
        id: 'lumi-arbutin',
        name: 'Alpha Arbutin',
        concentration: '2%',
        actionTag: 'EVENS TONE',
        ingredientSlug: 'alpha-arbutin',
        artKind: 'photo',
        imageSrc: '/images/ingredients/alpha-arbutin.jpg',
        accentHex: '#8C6BA8',
      },
      {
        id: 'lumi-greentea',
        name: 'Green Tea',
        actionTag: 'PROTECTS',
        ingredientSlug: 'green-tea-camellia',
        artKind: 'photo',
        imageSrc: '/images/ingredients/green-tea.jpg',
        accentHex: '#5B8A68',
      },
    ],
  },
  {
    slug: 'sepiwhite-serum',
    productId: 'prod_sepiwhite_serum',
    title: 'SephiWhite',
    packagingLabel: 'Sepiwhite™ + Alpha Arbutin',
    volumeLabel: '30 ML',
    formattedPrice: '₹1,850',
    formulaSummary: 'Advanced Pigmentation Correcting Serum',
    cutoutSrc: '/images/hero/bottles/sephiwhite.png',
    cutoutWidth: 234,
    cutoutHeight: 623,
    auraHex: '#8C6BA8',
    splashHueTint: 'rgba(140, 107, 168, 0.22)',
    restLayout: {
      leftPercent: 51,
      bottomPx: 162,
      heightPx: 248,
      zIndex: 24,
      tiltDeg: 0.5,
    },
    splashIngredients: [
      {
        id: 'sepi-sepiwhite',
        name: 'Sepiwhite™',
        actionTag: 'TARGETS SPOTS',
        ingredientSlug: 'sepiwhite',
        artKind: 'photo',
        imageSrc: '/images/ingredients/sepiwhite.jpg',
        accentHex: '#8C6BA8',
      },
      {
        id: 'sepi-arbutin',
        name: 'Alpha Arbutin',
        actionTag: 'BRIGHTENS',
        ingredientSlug: 'alpha-arbutin',
        artKind: 'photo',
        imageSrc: '/images/ingredients/alpha-arbutin.jpg',
        accentHex: '#8C6BA8',
      },
      {
        id: 'sepi-pea',
        name: 'Pea & Quinoa',
        actionTag: 'FIRMS & NOURISHES',
        ingredientSlug: 'pea-quinoa-extracts',
        artKind: 'pea-quinoa',
        accentHex: '#7A9A6B',
      },
      {
        id: 'sepi-licorice',
        name: 'Licorice Root',
        actionTag: 'CALMS TONE',
        ingredientSlug: 'licorice-extract',
        artKind: 'licorice-root',
        accentHex: '#C29F6D',
      },
    ],
  },
  {
    slug: 'clear-tone-serum',
    productId: 'prod_clear_tone_serum',
    title: 'Clear Tone',
    packagingLabel: 'Kojic Acid 2% + Azelaic Acid',
    volumeLabel: '30 ML',
    formattedPrice: '₹1,750',
    formulaSummary: 'Tone Clarity · Dark Spot & Blemish Care',
    cutoutSrc: '/images/hero/bottles/clear-tone.png',
    cutoutWidth: 324,
    cutoutHeight: 897,
    auraHex: '#C29F6D',
    splashHueTint: 'rgba(194, 159, 109, 0.28)',
    restLayout: {
      leftPercent: 68,
      bottomPx: 84,
      heightPx: 236,
      zIndex: 28,
      tiltDeg: 1.0,
    },
    splashIngredients: [
      {
        id: 'clear-kojic',
        name: 'Kojic Acid',
        concentration: '2%',
        actionTag: 'FADES SPOTS',
        ingredientSlug: 'kojic-acid',
        artKind: 'kojic-rice',
        accentHex: '#C29F6D',
      },
      {
        id: 'clear-azelaic',
        name: 'Azelaic Acid',
        actionTag: 'CALMS REDNESS',
        ingredientSlug: 'azelaic-acid',
        artKind: 'azelaic-grain',
        accentHex: '#B89158',
      },
      {
        id: 'clear-licorice',
        name: 'Licorice Extract',
        actionTag: 'EVENS TONE',
        ingredientSlug: 'licorice-extract',
        artKind: 'licorice-root',
        accentHex: '#9C7341',
      },
      {
        id: 'clear-camellia',
        name: 'Camellia Leaf',
        actionTag: 'PROTECTS',
        ingredientSlug: 'green-tea-camellia',
        artKind: 'photo',
        imageSrc: '/images/ingredients/green-tea.jpg',
        accentHex: '#5B8A68',
      },
    ],
  },
  {
    slug: 'night-cream',
    productId: 'prod_night_cream',
    title: 'Night Elixir',
    packagingLabel: 'Intensive Brightening Renewal',
    volumeLabel: '50 G',
    formattedPrice: '₹2,150',
    formulaSummary: 'Overnight Moisture · Glutathione & Sweet Almond',
    cutoutSrc: '/images/hero/bottles/night-elixir.png',
    cutoutWidth: 311,
    cutoutHeight: 896,
    auraHex: '#5A3825',
    splashHueTint: 'rgba(195, 162, 123, 0.28)',
    restLayout: {
      leftPercent: 83,
      bottomPx: 96,
      heightPx: 252,
      zIndex: 25,
      tiltDeg: 1.5,
    },
    splashIngredients: [
      {
        id: 'night-almond',
        name: 'Sweet Almond Oil',
        actionTag: 'NOURISHES',
        ingredientSlug: 'sweet-almond-oil',
        artKind: 'sweet-almond',
        accentHex: '#C3A27B',
      },
      {
        id: 'night-hyaluronic',
        name: 'Hyaluronic Acid',
        actionTag: 'PLUMPS MOISTURE',
        ingredientSlug: 'sodium-hyaluronate',
        artKind: 'hyaluronic-drop',
        accentHex: '#7FA9B8',
      },
      {
        id: 'night-glutathione',
        name: 'Glutathione',
        actionTag: 'RENEWS GLOW',
        ingredientSlug: 'glutathione',
        artKind: 'photo',
        imageSrc: '/images/ingredients/glutathione.jpg',
        accentHex: '#D2984A',
      },
      {
        id: 'night-niacinamide',
        name: 'Niacinamide + B3',
        actionTag: 'REPAIRS BARRIER',
        ingredientSlug: 'niacinamide',
        artKind: 'photo',
        imageSrc: '/images/ingredients/niacinamide.jpg',
        accentHex: '#5A3825',
      },
    ],
  },
];

export const HERO_CONCERN_CARDS: HeroConcernCardSpec[] = [
  {
    id: 'concern-pigmentation',
    labelLine1: 'PIGMENTATION',
    labelLine2: '& DARK SPOTS',
    imageSrc: '/images/hero/stage/concern-pigmentation.jpg',
    alt: 'Warm golden-hour skin macro illustrating pigmentation and dark spot care',
    targetProductSlug: 'sepiwhite-serum',
    reticuleOffset: { cx: 54, cy: 52, r: 34 },
  },
  {
    id: 'concern-oil-pores',
    labelLine1: 'OIL CONTROL',
    labelLine2: '& PORES',
    imageSrc: '/images/hero/stage/concern-oil-pores.jpg',
    alt: 'Balanced, refined skin macro illustrating pore and sebum care',
    targetProductSlug: 'balancing-serum',
    reticuleOffset: { cx: 48, cy: 54, r: 34 },
  },
  {
    id: 'concern-radiance',
    labelLine1: 'DULLNESS &',
    labelLine2: 'DEHYDRATION',
    imageSrc: '/images/hero/stage/concern-radiance.jpg',
    alt: 'Dewy luminous skin macro illustrating brightening and overnight hydration',
    targetProductSlug: 'lumivitac-serum',
    reticuleOffset: { cx: 50, cy: 50, r: 34 },
  },
];
