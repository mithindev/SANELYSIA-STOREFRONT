export interface ProductColorTheme {
  name: string;
  primaryHex: string;
  surfaceHex: string;
  borderHex: string;
  textHex: string;
  moodNote: string;
}

export interface ProductKeyActive {
  name: string;
  concentration?: string;
  description: string;
  ingredientSlug?: string;
}

export type ProductCategory = 'serums' | 'night-care' | 'bundles';
export type SkinConcern = 'brightening' | 'pigmentation' | 'oil-control' | 'hydration';

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: ProductCategory;
  concerns: SkinConcern[];
  pricePaise: number;
  formattedPrice: string;
  compareAtPricePaise?: number;
  formattedCompareAtPrice?: string;
  badge?: string;
  frontLabel?: string;
  subtitle: string;
  shortDescription: string;
  descriptionHtml: string;
  image: string;
  gallery: string[];
  inStock: boolean;
  availableQuantity: number;
  variants: Array<{
    id: string;
    title: string;
    pricePaise: number;
    formattedPrice: string;
  }>;
  benefits: string[];
  keyActives: ProductKeyActive[];
  ingredients: string[];
  inci: string;
  howToUse: string[];
  suitableFor?: string;
  caution?: string;
  storage?: string;
  colorTheme: ProductColorTheme;
}

export const catalogProducts: ProductItem[] = [
  {
    id: 'prod_balancing_serum',
    slug: 'balancing-serum',
    title: 'Balancing Serum',
    brand: 'SAN ELYSIA',
    category: 'serums',
    concerns: ['oil-control', 'pigmentation', 'hydration'],
    pricePaise: 145000,
    formattedPrice: '₹1,450',
    compareAtPricePaise: 165000,
    formattedCompareAtPrice: '₹1,650',
    badge: 'BESTSELLER',
    frontLabel: 'NIACINAMIDE 12% · 12% Niacinamide + 1% Zinc',
    subtitle: 'Niacinamide 12% + Zinc PCA 1% + Alpha Arbutin 0.5%',
    shortDescription:
      'Oil Control • Pore Care • Skin Barrier Support. Lightweight daily serum to balance excess sebum and refine enlarged pores.',
    descriptionHtml: `
      <p>A lightweight daily serum formulated with 12% Niacinamide and 1% Zinc to help balance excess sebum, improve the appearance of enlarged pores and support the skin barrier.</p>
      <p>Enriched with Alpha Arbutin (0.5%), Salicylic Acid (0.5%), Aloe Vera, and Cucumber botanical extracts for comfortable, healthy-looking skin.</p>
    `,
    image: '/images/products/balancing-serum.jpg',
    gallery: [
      '/images/products/balancing-serum.jpg',
      '/images/products/ritual-collection.jpg',
    ],
    inStock: true,
    availableQuantity: 50,
    variants: [
      { id: 'var_balancing_30ml', title: '30 ml Dropper Bottle', pricePaise: 145000, formattedPrice: '₹1,450' },
    ],
    benefits: [
      'Helps balance excess oil',
      'Refines the appearance of pores',
      'Supports healthy-looking skin',
      'Suitable for Oily & Combination Skin',
    ],
    keyActives: [
      {
        name: 'Niacinamide',
        concentration: '12%',
        description: 'Helps reduce blemishes, minimize the appearance of pores, and improve uneven skin tone.',
        ingredientSlug: 'niacinamide',
      },
      {
        name: 'Zinc PCA',
        concentration: '1%',
        description: 'Helps control excess oil and reduce the appearance of acne and blemishes.',
        ingredientSlug: 'zinc-pca',
      },
      {
        name: 'Alpha Arbutin',
        concentration: '0.5%',
        description: 'Helps fade the appearance of dark spots and pigmentation for a brighter complexion.',
        ingredientSlug: 'alpha-arbutin',
      },
      {
        name: 'Aloe Vera Extract',
        description: 'Helps soothe, hydrate, and calm the skin.',
        ingredientSlug: 'aloe-cucumber-soothers',
      },
      {
        name: 'Hydroxy Acid (Salicylic Acid)',
        concentration: '0.5%',
        description: 'Helps exfoliate dead skin cells and improve skin texture for smoother-looking skin.',
        ingredientSlug: 'salicylic-acid',
      },
      {
        name: 'Cucumber Extract',
        description: 'Helps refresh, soothe, and hydrate the skin.',
        ingredientSlug: 'aloe-cucumber-soothers',
      },
    ],
    ingredients: [
      'Niacinamide 12%',
      'Zinc PCA 1%',
      'Alpha-Arbutin 0.5%',
      'Salicylic Acid (Hydroxy Acid) 0.5%',
      'Aloe Barbadensis Leaf Extract',
      'Cucumis Sativus (Cucumber) Fruit Extract',
      'Panthenol & Allantoin',
    ],
    inci: 'Aqua (DM Water), Niacinamide 12%, Propanediol, Zinc PCA 1%, Glycerin, Alpha-Arbutin 0.5%, Aloe Barbadensis Leaf Extract, Salicylic Acid 0.5%, Cucumis Sativus (Cucumber) Fruit Extract, Panthenol, Hydroxyethylcellulose, Allantoin, Disodium EDTA, Phenoxyethanol, Ethylhexylglycerin',
    howToUse: [
      'Apply 2–3 drops to clean, dry skin and gently spread over the face and neck.',
      'Use once daily initially, then increase to twice daily as tolerated.',
      'Follow with moisturiser and sunscreen during the day.',
    ],
    suitableFor: 'Suitable for Oily & Combination Skin.',
    caution: 'For external use only. Avoid contact with eyes. Patch test before use. Discontinue use if irritation occurs.',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    colorTheme: {
      name: 'Green',
      primaryHex: '#5B8A68',
      surfaceHex: '#EEF5F0',
      borderHex: '#C7DEC9',
      textHex: '#2F5239',
      moodNote: 'Soothing, skin balance, freshness, and healthy skin.',
    },
  },
  {
    id: 'prod_sepiwhite_serum',
    slug: 'sepiwhite-serum',
    title: 'Sepiwhite Serum',
    brand: 'SAN ELYSIA',
    category: 'serums',
    concerns: ['pigmentation', 'brightening', 'hydration'],
    pricePaise: 185000,
    formattedPrice: '₹1,850',
    badge: 'PIGMENTATION CARE',
    frontLabel: 'ADVANCED PIGMENTATION CORRECTING SERUM',
    subtitle: 'Sepiwhite™ + Niacinamide + Alpha Arbutin + Pea Extract',
    shortDescription:
      'A targeted brightening serum to help improve the appearance of dark spots, pigmentation, and uneven skin tone while maintaining hydration.',
    descriptionHtml: `
      <p>A targeted brightening serum formulated with Sepiwhite, Niacinamide, and Alpha Arbutin to help improve the appearance of dark spots, pigmentation, and uneven skin tone.</p>
      <p>Enriched with Pea Seed Extract, Quinoa Seed Extract, Licorice Extract, Cucumber Extract, Panthenol, and Sodium Hyaluronate, this lightweight serum helps maintain skin hydration while promoting a smoother, brighter, and more even-looking complexion.</p>
    `,
    image: '/images/products/sepiwhite-serum.jpg',
    gallery: [
      '/images/products/sepiwhite-serum.jpg',
      '/images/products/ritual-collection.jpg',
    ],
    inStock: true,
    availableQuantity: 42,
    variants: [
      { id: 'var_sepiwhite_30ml', title: '30 ml Dropper Bottle', pricePaise: 185000, formattedPrice: '₹1,850' },
    ],
    benefits: [
      'Helps reduce the appearance of dark spots and uneven skin tone',
      'Helps improve the appearance of pigmentation',
      'Promotes a brighter, more even-looking complexion',
      'Helps maintain skin hydration and softness',
      'Supports a smooth, healthy-looking skin appearance',
    ],
    keyActives: [
      {
        name: 'Sepiwhite™ (Undecylenoyl Phenylalanine)',
        description: 'Helps reduce the appearance of dark spots and promote an even-looking complexion.',
        ingredientSlug: 'sepiwhite',
      },
      {
        name: 'Niacinamide',
        description: 'Helps improve skin texture, even skin tone, and strengthen the skin barrier.',
        ingredientSlug: 'niacinamide',
      },
      {
        name: 'Alpha Arbutin',
        description: 'Helps improve the appearance of pigmentation and dark spots.',
        ingredientSlug: 'alpha-arbutin',
      },
      {
        name: 'Pea Seed Extract',
        description: 'Helps support skin firmness and maintain a youthful-looking appearance.',
        ingredientSlug: 'pea-quinoa-extracts',
      },
      {
        name: 'Quinoa Seed Extract',
        description: 'Helps nourish, hydrate, and protect the skin.',
        ingredientSlug: 'pea-quinoa-extracts',
      },
      {
        name: 'Licorice Extract',
        description: 'Helps soothe the skin and brighten the appearance of uneven skin tone.',
        ingredientSlug: 'licorice-extract',
      },
      {
        name: 'Cucumber Extract',
        description: 'Helps soothe, refresh, and hydrate the skin.',
        ingredientSlug: 'aloe-cucumber-soothers',
      },
    ],
    ingredients: [
      'Sepiwhite™ (Undecylenoyl Phenylalanine)',
      'Niacinamide',
      'Alpha-Arbutin',
      'Pisum Sativum (Pea) Seed Extract',
      'Chenopodium Quinoa Seed Extract',
      'Glycyrrhiza Glabra (Licorice) Root Extract',
      'Cucumis Sativus (Cucumber) Fruit Extract',
      'Panthenol & Sodium Hyaluronate',
    ],
    inci: 'Aqua, Niacinamide, Pisum Sativum (Pea) Seed Extract, Benzyl Alcohol, Potassium Sorbate, Sodium Benzoate, Chenopodium Quinoa Seed Extract, Glycerin, Undecylenoyl Phenylalanine, Alpha-Arbutin, Panthenol, Sodium Hyaluronate, Phenoxyethanol, Glycyrrhiza Glabra (Licorice) Root Extract, Cucumis Sativus (Cucumber) Fruit Extract, Xanthan Gum, Triethanolamine',
    howToUse: [
      'Apply a few drops to clean, dry skin and gently spread over the face and neck.',
      'Allow it to absorb before applying moisturiser.',
      'Use sunscreen during the daytime.',
    ],
    suitableFor: 'All skin types, subject to individual skin tolerance.',
    caution: 'For external use only. Avoid contact with eyes. Patch test before use. Discontinue use if irritation occurs.',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    colorTheme: {
      name: 'Lavender + Pearl White',
      primaryHex: '#8C6BA8',
      surfaceHex: '#F5F0FA',
      borderHex: '#DED0EC',
      textHex: '#4E3766',
      moodNote: 'Communicates brightening and pigmentation-care benefits with a premium look.',
    },
  },
  {
    id: 'prod_clear_tone_serum',
    slug: 'clear-tone-serum',
    title: 'Clear Tone',
    brand: 'SAN ELYSIA',
    category: 'serums',
    concerns: ['pigmentation', 'brightening', 'oil-control'],
    pricePaise: 175000,
    formattedPrice: '₹1,750',
    badge: 'TARGETED CLARITY',
    frontLabel: 'KOJIC ACID 2% + AZELAIC ACID BRIGHTENING SERUM',
    subtitle: 'Kojic Acid 2% + Azelaic Acid + Niacinamide + Licorice',
    shortDescription:
      'Helps improve the appearance of uneven skin tone, dark spots, blemishes, and redness while soothing and hydrating all skin types.',
    descriptionHtml: `
      <p>Clear Tone pairs Kojic Acid 2% with Azelaic Acid and Niacinamide to visibly target dark spots, blemishes, and uneven skin tone while helping soothe visible redness.</p>
      <p>Balanced with Licorice Root Extract, Camellia Sinensis Leaf Extract, and Hyaluronic Acid (Sodium Hyaluronate) for daily antioxidant defense and smooth, supple hydration.</p>
    `,
    image: '/images/products/clear-tone-serum.jpg',
    gallery: [
      '/images/products/clear-tone-serum.jpg',
      '/images/products/ritual-collection.jpg',
    ],
    inStock: true,
    availableQuantity: 38,
    variants: [
      { id: 'var_cleartone_30ml', title: '30 ml Dropper Bottle', pricePaise: 175000, formattedPrice: '₹1,750' },
    ],
    benefits: [
      'Helps reduce the appearance of dark spots, blemishes, and pigmentation',
      'Helps improve uneven skin tone and promote a brighter complexion',
      'Helps soothe skin and reduce the appearance of redness and irritation',
      'Helps maintain skin hydration, softness, and smoothness',
      'Provides antioxidant protection against environmental stressors',
      'Supports a healthy, clear, radiant, and even-looking complexion',
    ],
    keyActives: [
      {
        name: 'Kojic Acid',
        concentration: '2%',
        description: 'Helps reduce the appearance of dark spots and pigmentation for a brighter-looking complexion.',
        ingredientSlug: 'kojic-acid',
      },
      {
        name: 'Azelaic Acid',
        description: 'Helps improve uneven skin tone, reduce blemishes, and soothe the skin.',
        ingredientSlug: 'azelaic-acid',
      },
      {
        name: 'Niacinamide',
        description: 'Helps brighten skin, minimize the appearance of pores, and strengthen the skin barrier.',
        ingredientSlug: 'niacinamide',
      },
      {
        name: 'Licorice Extract',
        description: 'Helps fade the appearance of dark spots and promote an even skin tone.',
        ingredientSlug: 'licorice-extract',
      },
      {
        name: 'Camellia Extract',
        description: 'Provides antioxidant protection and helps soothe and nourish the skin.',
        ingredientSlug: 'green-tea-camellia',
      },
      {
        name: 'Hyaluronic Acid (Sodium Hyaluronate)',
        description: 'Helps attract and retain moisture, keeping skin hydrated, plump, and smooth.',
        ingredientSlug: 'sodium-hyaluronate',
      },
    ],
    ingredients: [
      'Kojic Acid 2%',
      'Azelaic Acid',
      'Niacinamide',
      'Glycyrrhiza Glabra (Licorice) Root Extract',
      'Camellia Sinensis Leaf Extract',
      'Sodium Hyaluronate (Hyaluronic Acid)',
    ],
    inci: 'Aqua, Azelaic Acid, Niacinamide, Propylene Glycol, Glycerin, Kojic Acid, Glycyrrhiza Glabra (Licorice) Root Extract, Camellia Sinensis Leaf Extract, Phenoxyethanol, Ethylhexylglycerin, Xanthan Gum, Sodium Hyaluronate, Disodium EDTA',
    howToUse: [
      'Apply 2–3 drops to clean, dry skin and gently massage until absorbed.',
      'Follow with moisturizer.',
      'Use sunscreen during the day.',
    ],
    suitableFor: 'For all skin types.',
    caution: 'For external use only. Avoid contact with eyes. Patch test before use. Discontinue use if irritation occurs. Keep out of reach of children.',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    colorTheme: {
      name: 'Beige + Champagne',
      primaryHex: '#C29F6D',
      surfaceHex: '#F8F1E5',
      borderHex: '#E5D3B6',
      textHex: '#5D4424',
      moodNote: 'Gentle care, understated luxury, and an elegant champagne-beige appearance.',
    },
  },
  {
    id: 'prod_lumivitac_serum',
    slug: 'lumivitac-serum',
    title: 'LumiVitaC',
    brand: 'SAN ELYSIA',
    category: 'serums',
    concerns: ['brightening', 'pigmentation'],
    pricePaise: 165000,
    formattedPrice: '₹1,650',
    badge: 'RADIANCE BOOST',
    frontLabel: 'VITAMIN C 10% + GLUTATHIONE BRIGHTENING SERUM',
    subtitle: 'Vitamin C 10% + Niacinamide 3% + Alpha Arbutin 2% + Glutathione',
    shortDescription:
      'Helps brighten dull-looking skin and improve the appearance of uneven skin tone with potent antioxidant protection.',
    descriptionHtml: `
      <p>LumiVitaC is a high-radiance brightening serum combining Vitamin C 10% (Ascorbic Acid), Niacinamide 3%, Alpha Arbutin 2%, and Glutathione to visibly revitalize dull-looking skin and reduce the appearance of dark spots and pigmentation.</p>
      <p>Buffered with soothing Green Tea Extract to help calm visible redness and shield against daily environmental stressors for a smoother, glowing complexion.</p>
    `,
    image: '/images/products/lumivita-c-serum.jpg',
    gallery: [
      '/images/products/lumivita-c-serum.jpg',
      '/images/products/ritual-collection.jpg',
    ],
    inStock: true,
    availableQuantity: 45,
    variants: [
      { id: 'var_lumivitac_30ml', title: '30 ml Dropper Bottle', pricePaise: 165000, formattedPrice: '₹1,650' },
    ],
    benefits: [
      'Helps reduce the appearance of dark spots, pigmentation, and uneven skin tone',
      'Helps brighten the skin and promote a radiant, glowing complexion',
      'Helps improve skin texture and strengthen the skin barrier',
      'Provides antioxidant protection against environmental damage',
      'Helps soothe the skin and reduce the appearance of redness',
      'Supports a smoother, clearer, healthier, and more even-looking complexion',
    ],
    keyActives: [
      {
        name: 'Vitamin C',
        concentration: '10%',
        description: 'Helps brighten the skin, reduce the appearance of dark spots, and provide antioxidant protection.',
        ingredientSlug: 'vitamin-c',
      },
      {
        name: 'Niacinamide',
        concentration: '3%',
        description: 'Helps even out skin tone, minimize the appearance of pores, and strengthen the skin barrier.',
        ingredientSlug: 'niacinamide',
      },
      {
        name: 'Alpha Arbutin',
        concentration: '2%',
        description: 'Helps reduce the appearance of pigmentation and dark spots for a brighter complexion.',
        ingredientSlug: 'alpha-arbutin',
      },
      {
        name: 'Glutathione',
        description: 'Provides antioxidant benefits and helps promote brighter, radiant-looking skin.',
        ingredientSlug: 'glutathione',
      },
      {
        name: 'Green Tea Extract',
        description: 'Helps soothe the skin, reduce the appearance of redness, and protect against environmental stressors.',
        ingredientSlug: 'green-tea-camellia',
      },
    ],
    ingredients: [
      'Vitamin C (Ascorbic Acid) 10%',
      'Niacinamide 3%',
      'Alpha-Arbutin 2%',
      'Glutathione',
      'Green Tea Extract',
    ],
    inci: 'Aqua, Ascorbic Acid, Propylene Glycol, Glycerin, Niacinamide, Alpha-Arbutin, Green Tea Extract, Glutathione, Phenoxyethanol, Ethylhexylglycerin, Xanthan Gum, Sodium Metabisulfite, Disodium EDTA',
    howToUse: [
      'Apply 2–3 drops to clean, dry skin and gently massage until absorbed.',
      'Follow with moisturizer.',
      'Use broad-spectrum sunscreen during the day.',
    ],
    suitableFor: 'Dull, uneven, or pigmentation-prone skin.',
    caution: 'For external use only. Avoid contact with eyes. Patch test before use. Discontinue use if irritation occurs.',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    colorTheme: {
      name: 'Orange',
      primaryHex: '#D97228',
      surfaceHex: '#FDF2E7',
      borderHex: '#F3D2B2',
      textHex: '#8C4311',
      moodNote: 'Represents Vitamin C, citrus freshness, and radiant glow.',
    },
  },
  {
    id: 'prod_night_cream',
    slug: 'night-cream',
    title: 'Night Cream',
    brand: 'SAN ELYSIA',
    category: 'night-care',
    concerns: ['brightening', 'pigmentation', 'hydration'],
    pricePaise: 215000,
    formattedPrice: '₹2,150',
    compareAtPricePaise: 240000,
    formattedCompareAtPrice: '₹2,400',
    badge: 'OVERNIGHT RENEWAL',
    frontLabel: 'INTENSIVE BRIGHTENING & SKIN RENEWAL CREAM',
    subtitle: 'Niacinamide + Sepiwhite™ + Alpha Arbutin + Kojic Dipalmitate + Glutathione',
    shortDescription:
      'A nourishing night cream enriched with Sweet Almond Oil and Sodium Hyaluronate to replenish overnight moisture and enhance radiance.',
    descriptionHtml: `
      <p>A nourishing night cream formulated with Niacinamide, Alpha Arbutin, Kojic Dipalmitate and Glutathione to help improve the appearance of uneven skin tone, enhance radiance and promote a smoother, more hydrated-looking complexion.</p>
      <p>Enriched with Sweet Almond Oil and Sodium Hyaluronate, it helps replenish moisture and leaves skin feeling soft, supple and refreshed.</p>
    `,
    image: '/images/products/night-cream.jpg',
    gallery: [
      '/images/products/night-cream.jpg',
      '/images/products/ritual-collection.jpg',
    ],
    inStock: true,
    availableQuantity: 35,
    variants: [
      { id: 'var_nightcream_50g', title: '50 g Glass Jar', pricePaise: 215000, formattedPrice: '₹2,150' },
    ],
    benefits: [
      'Helps improve the appearance of uneven skin tone',
      'Supports brighter, more radiant-looking skin',
      'Helps reduce the appearance of dark spots and pigmentation',
      'Provides overnight hydration and nourishment',
      'Helps improve skin softness and smoothness',
    ],
    keyActives: [
      {
        name: 'Niacinamide',
        description: 'Supports an even-looking skin tone and helps strengthen the skin barrier.',
        ingredientSlug: 'niacinamide',
      },
      {
        name: 'Sepiwhite™ (Undecylenoyl Phenylalanine)',
        description: 'Helps improve the appearance of dark spots and uneven skin tone for a more uniform-looking complexion.',
        ingredientSlug: 'sepiwhite',
      },
      {
        name: 'Alpha Arbutin',
        description: 'Helps improve the appearance of dark spots and promotes a more even-looking complexion.',
        ingredientSlug: 'alpha-arbutin',
      },
      {
        name: 'Kojic Dipalmitate',
        description: 'Helps promote a brighter, more even-looking skin tone.',
        ingredientSlug: 'kojic-acid',
      },
      {
        name: 'Glutathione',
        description: 'An antioxidant that supports radiant-looking skin.',
        ingredientSlug: 'glutathione',
      },
      {
        name: 'Sodium Hyaluronate',
        description: 'Helps attract and retain moisture, keeping skin hydrated and plump-looking.',
        ingredientSlug: 'sodium-hyaluronate',
      },
      {
        name: 'Sweet Almond Oil',
        description: 'Nourishes and softens the skin.',
        ingredientSlug: 'sweet-almond-oil',
      },
    ],
    ingredients: [
      'Niacinamide',
      'Sepiwhite™ (Undecylenoyl Phenylalanine)',
      'Alpha-Arbutin',
      'Kojic Dipalmitate',
      'Glutathione',
      'Sodium Hyaluronate',
      'Prunus Amygdalus Dulcis (Sweet Almond) Oil',
    ],
    inci: 'Aqua, Niacinamide, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Glyceryl Stearate, Stearic Acid, Glycerin, Ceteareth-20, Undecylenoyl Phenylalanine, Kojic Dipalmitate, Glutathione, Alpha-Arbutin, Sodium Hyaluronate, Dimethicone, Phenoxyethanol, Disodium EDTA',
    howToUse: [
      'Apply an appropriate amount to clean, dry face and neck every night.',
      'Gently massage until absorbed. Avoid direct contact with eyes.',
      'Use sunscreen during the day.',
    ],
    suitableFor: 'Dry, dull, or uneven skin seeking overnight moisture and tone renewal.',
    caution: 'For external use only. Patch test before use. Discontinue use if irritation occurs.',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    colorTheme: {
      name: 'Warm Ivory & Chocolate',
      primaryHex: '#5A3825',
      surfaceHex: '#F3ECE2',
      borderHex: '#DDD0C0',
      textHex: '#3D271D',
      moodNote: 'Restorative overnight nourishment and skin tone renewal.',
    },
  },
  {
    id: 'prod_brightening_ritual_bundle',
    slug: 'brightening-renewal-ritual-set',
    title: 'The AM/PM Brightening & Renewal Ritual',
    brand: 'SAN ELYSIA',
    category: 'bundles',
    concerns: ['brightening', 'pigmentation', 'hydration'],
    pricePaise: 495000,
    formattedPrice: '₹4,950',
    compareAtPricePaise: 565000,
    formattedCompareAtPrice: '₹5,650',
    badge: '12% SAVINGS',
    frontLabel: '3-STEP RADIANCE & PIGMENTATION SET',
    subtitle: 'LumiVitaC (30 ml) + Sepiwhite Serum (30 ml) + Night Cream (50 g)',
    shortDescription:
      'A coordinated day-and-night brightening ritual combining Vitamin C 10% antioxidant radiance, Sepiwhite pigmentation care, and overnight renewal.',
    descriptionHtml: `
      <p>Designed to address dullness, dark spots, and uneven skin tone across your 24-hour skin cycle. Wake up your morning glow with LumiVitaC (Vitamin C 10% + Glutathione), target stubborn pigmentation in the evening with Sepiwhite Serum, and seal in overnight nourishment with our Intensive Brightening Night Cream.</p>
      <p>Includes full-size bottles of all three formulations at 12% ritual savings.</p>
    `,
    image: '/images/products/ritual-collection.jpg',
    gallery: [
      '/images/products/ritual-collection.jpg',
      '/images/products/lumivita-c-serum.jpg',
      '/images/products/sepiwhite-serum.jpg',
      '/images/products/night-cream.jpg',
    ],
    inStock: true,
    availableQuantity: 22,
    variants: [
      { id: 'var_bundle_brightening', title: 'Complete 3-Piece AM/PM Set', pricePaise: 495000, formattedPrice: '₹4,950' },
    ],
    benefits: [
      'Supports 24-hour brightening and dark-spot care across AM and PM routines',
      'Pairs Vitamin C 10% + Glutathione daytime protection with Sepiwhite™ & Night Cream recovery',
      'Delivers sustained hydration via Sodium Hyaluronate, Panthenol, and Sweet Almond Oil',
      'Saves ₹700 (12%) compared to individual full-size purchases',
    ],
    keyActives: [
      {
        name: 'Vitamin C 10% + Glutathione',
        description: 'Morning antioxidant brightening and protection against dullness (LumiVitaC).',
        ingredientSlug: 'vitamin-c',
      },
      {
        name: 'Sepiwhite™ + Alpha Arbutin',
        description: 'Targeted pigmentation and dark-spot correction (Sepiwhite Serum & Night Cream).',
        ingredientSlug: 'sepiwhite',
      },
      {
        name: 'Niacinamide + Kojic Dipalmitate',
        description: 'Barrier support, smooth texture, and overnight tone renewal (Night Cream).',
        ingredientSlug: 'niacinamide',
      },
    ],
    ingredients: [
      'LumiVitaC Vitamin C 10% + Glutathione Serum (30 ml)',
      'Sepiwhite Advanced Pigmentation Correcting Serum (30 ml)',
      'Intensive Brightening & Skin Renewal Night Cream (50 g)',
    ],
    inci: 'Contains full-size LumiVitaC, Sepiwhite Serum, and Night Cream. Refer to individual product labels for complete INCI declarations.',
    howToUse: [
      'Morning: Apply 2–3 drops of LumiVitaC to clean, dry skin, follow with moisturizer and broad-spectrum sunscreen.',
      'Evening Step 1: Apply a few drops of Sepiwhite Serum to clean, dry face and neck and allow to absorb.',
      'Evening Step 2: Massage Night Cream evenly over face and neck every night.',
    ],
    suitableFor: 'All skin types seeking brighter, more even-looking skin tone.',
    caution: 'For external use only. Patch test each product before first use. Always pair daytime brightening routines with sunscreen.',
    storage: 'Store all formulations in a cool, dry place away from direct sunlight.',
    colorTheme: {
      name: 'Champagne & Ivory Ritual',
      primaryHex: '#C3A27B',
      surfaceHex: '#F3ECE2',
      borderHex: '#DDD0C0',
      textHex: '#3D271D',
      moodNote: 'Coordinated morning radiance and evening skin renewal.',
    },
  },
  {
    id: 'prod_clarity_balance_duo',
    slug: 'clarity-balance-duo',
    title: 'The Clarity & Overnight Balance Duo',
    brand: 'SAN ELYSIA',
    category: 'bundles',
    concerns: ['oil-control', 'pigmentation', 'hydration'],
    pricePaise: 324000,
    formattedPrice: '₹3,240',
    compareAtPricePaise: 360000,
    formattedCompareAtPrice: '₹3,600',
    badge: '10% SAVINGS',
    frontLabel: 'OIL CONTROL & OVERNIGHT RENEWAL DUO',
    subtitle: 'Balancing Serum (30 ml) + Night Cream (50 g)',
    shortDescription:
      'Daytime oil control and pore refinement with 12% Niacinamide + 1% Zinc paired with nourishing overnight brightness renewal.',
    descriptionHtml: `
      <p>Tailored for oily and combination complexions dealing with excess shine, visible pores, and lingering post-blemish marks. Balancing Serum regulates daytime oil with 12% Niacinamide, 1% Zinc PCA, and 0.5% Salicylic Acid, while Night Cream replenishes overnight softness and tone clarity.</p>
    `,
    image: '/images/products/ritual-collection.jpg',
    gallery: [
      '/images/products/ritual-collection.jpg',
      '/images/products/balancing-serum.jpg',
      '/images/products/night-cream.jpg',
    ],
    inStock: true,
    availableQuantity: 25,
    variants: [
      { id: 'var_bundle_clarity', title: '2-Piece Clarity Duo', pricePaise: 324000, formattedPrice: '₹3,240' },
    ],
    benefits: [
      'Balances excess daytime sebum and refines the appearance of enlarged pores',
      'Targets post-blemish uneven tone with Alpha Arbutin, Kojic Dipalmitate, and Sepiwhite™',
      'Maintains comfortable overnight moisture without heavy residue',
    ],
    keyActives: [
      {
        name: 'Niacinamide 12% + Zinc PCA 1%',
        description: 'Helps balance excess oil, minimize pores, and strengthen the barrier (Balancing Serum).',
        ingredientSlug: 'niacinamide',
      },
      {
        name: 'Salicylic Acid 0.5%',
        description: 'Gently exfoliates dead skin cells for smoother skin texture.',
        ingredientSlug: 'salicylic-acid',
      },
      {
        name: 'Kojic Dipalmitate + Glutathione + Sweet Almond Oil',
        description: 'Overnight tone brightening and nourishment (Night Cream).',
        ingredientSlug: 'kojic-acid',
      },
    ],
    ingredients: [
      'Balancing Serum Niacinamide 12% + Zinc 1% (30 ml)',
      'Intensive Brightening & Skin Renewal Night Cream (50 g)',
    ],
    inci: 'Contains full-size Balancing Serum and Night Cream. Refer to individual product labels for complete INCI declarations.',
    howToUse: [
      'Morning: Apply 2–3 drops of Balancing Serum to clean, dry skin (start once daily and build to twice daily as tolerated) followed by moisturizer and sunscreen.',
      'Night: Apply Balancing Serum if tolerated, or massage Night Cream directly onto clean, dry face and neck.',
    ],
    suitableFor: 'Ideal for Oily & Combination Skin.',
    caution: 'For external use only. Patch test before use. Use sunscreen during the day.',
    storage: 'Store in a cool, dry place away from direct sunlight.',
    colorTheme: {
      name: 'Green & Warm Ivory',
      primaryHex: '#5B8A68',
      surfaceHex: '#EEF5F0',
      borderHex: '#C7DEC9',
      textHex: '#2F5239',
      moodNote: 'Fresh pore clarity paired with calm overnight nourishment.',
    },
  },
];
