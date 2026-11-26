export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: 'skincare' | 'supplements' | 'self-care' | 'bundles';
  pricePaise: number;
  formattedPrice: string;
  compareAtPricePaise?: number;
  formattedCompareAtPrice?: string;
  badge?: string;
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
  ingredients: string[];
  howToUse: string[];
}

export const catalogProducts: ProductItem[] = [
  {
    id: 'prod_balancing_serum',
    slug: 'dew-drops-balancing-serum',
    title: 'Dew Drops Botanical Balancing Serum',
    brand: 'SAN ELYSIA',
    category: 'skincare',
    pricePaise: 185000,
    formattedPrice: '₹1,850',
    compareAtPricePaise: 210000,
    formattedCompareAtPrice: '₹2,100',
    badge: 'BESTSELLER',
    subtitle: 'Niacinamide 12% + Zinc PCA 1% + Centella',
    shortDescription:
      'A thoughtful serum and targeted skincare essential to help keep your skin clear, comfortable and healthy-looking.',
    descriptionHtml: `
      <p>Formulated with a clinical concentration of 12% pure Niacinamide and 1% Zinc PCA suspended in botanical Centella Asiatica water, this lightweight serum refines enlarged pores, regulates surface sebum, and calms redness without stripping hydration.</p>
      <p>Silky, fast-absorbing and fragrance-free. Safe for sensitive skin and suitable for both morning and evening application.</p>
    `,
    image: '/images/hero/san-elysia-serum-cutout.webp',
    gallery: [
      '/images/hero/san-elysia-serum-cutout.webp',
      '/images/hero/hero-product-clean.jpg',
      '/images/hero/hero-ritual-model.jpg',
    ],
    inStock: true,
    availableQuantity: 45,
    variants: [
      { id: 'var_serum_30ml', title: '30ml Full Size', pricePaise: 185000, formattedPrice: '₹1,850' },
      { id: 'var_serum_50ml', title: '50ml Ritual Size', pricePaise: 265000, formattedPrice: '₹2,650' },
    ],
    ingredients: [
      'Niacinamide (Vitamin B3) 12%',
      'Zinc PCA 1%',
      'Centella Asiatica Leaf Extract',
      'Sodium Hyaluronate',
      'Allantoin',
      'Glycerin',
    ],
    howToUse: [
      'Dispense 3–4 drops onto freshly cleansed, slightly damp skin.',
      'Gently press into the face and neck until absorbed.',
      'Follow with your favorite moisturizer. Use morning and night.',
    ],
  },
  {
    id: 'prod_cream_cleanser',
    slug: 'soft-start-cream-cleanser',
    title: 'Soft Start Nourishing Cream Cleanser',
    brand: 'SAN ELYSIA',
    category: 'skincare',
    pricePaise: 145000,
    formattedPrice: '₹1,450',
    subtitle: 'Colloidal Oat + Chamomile + Marshmallow Root',
    shortDescription:
      'A comforting, non-foaming wash that lifts away daily impurities while keeping your moisture barrier intact.',
    descriptionHtml: `
      <p>Soft Start is a plush cream cleanser designed for skin that easily feels tight or stripped. Infused with colloidal oat extract, organic chamomile, and calming marshmallow root, it leaves skin velvety, calm, and naturally radiant.</p>
      <p>Melts effortlessly on contact with warm water and rinses completely clean with zero residue.</p>
    `,
    image: '/images/hero/hero-product-frame.jpg',
    gallery: [
      '/images/hero/hero-product-frame.jpg',
      '/images/hero/hero-product-clean.jpg',
    ],
    inStock: true,
    availableQuantity: 60,
    variants: [
      { id: 'var_clean_150ml', title: '150ml Bottle', pricePaise: 145000, formattedPrice: '₹1,450' },
    ],
    ingredients: [
      'Colloidal Oatmeal',
      'Matricaria (Chamomile) Flower Extract',
      'Althaea Officinalis (Marshmallow) Root Extract',
      'Jojoba Seed Oil',
      'Sweet Almond Oil',
    ],
    howToUse: [
      'Massage 1–2 pumps onto dry or damp face in slow circular motions.',
      'Rinse thoroughly with lukewarm water.',
      'Use every morning and as the first step of your evening ritual.',
    ],
  },
  {
    id: 'prod_daily_moisturizer',
    slug: 'cloud-nine-daily-moisturizer',
    title: 'Cloud Nine Daily Ceramide Barrier Cream',
    brand: 'SAN ELYSIA',
    category: 'skincare',
    pricePaise: 210000,
    formattedPrice: '₹2,100',
    badge: 'NEW',
    subtitle: '5 Essential Ceramides + Squalane + Beta-Glucan',
    shortDescription:
      'Deep, lightweight hydration that locks in moisture and shields against environmental stressors all day long.',
    descriptionHtml: `
      <p>A cloud-like emulsion delivering 5 multi-molecular ceramides identical to your skin’s natural lipid barrier. Enriched with botanical olive squalane and oat beta-glucan to plump, soothe, and seal in lasting hydration without weight or grease.</p>
    `,
    image: '/images/hero/hero-product-clean.jpg',
    gallery: [
      '/images/hero/hero-product-clean.jpg',
      '/images/hero/hero-product-frame.jpg',
    ],
    inStock: true,
    availableQuantity: 38,
    variants: [
      { id: 'var_moist_50ml', title: '50ml Jar', pricePaise: 210000, formattedPrice: '₹2,100' },
    ],
    ingredients: [
      'Ceramide NP, AP, EOP, EOS, NS',
      'Squalane (Olive)',
      'Beta-Glucan',
      'Shea Butter Fruit',
      'Tocopherol (Vitamin E)',
    ],
    howToUse: [
      'Warm a dime-sized amount between fingertips.',
      'Smooth evenly over face, neck, and décolletage as the final skincare step.',
      'Always follow with daily broad-spectrum SPF in the morning.',
    ],
  },
  {
    id: 'prod_bath_soak',
    slug: 'quiet-moments-bath-soak',
    title: 'Quiet Moments Botanical Mineral Bath Soak',
    brand: 'SAN ELYSIA',
    category: 'self-care',
    pricePaise: 165000,
    formattedPrice: '₹1,650',
    subtitle: 'Dead Sea Salts + French Lavender + Sweet Almond Oil',
    shortDescription:
      'A deeply restorative botanical soak formulated to release body tension, soften skin, and quiet the mind.',
    descriptionHtml: `
      <p>Transform your evening into an intentional restorative sanctuary. Harvested Dead Sea mineral salts infused with real French lavender buds and softening sweet almond oil soothe sore muscles and nourish dry winter skin.</p>
    `,
    image: '/images/hero/product-bottle.jpg',
    gallery: ['/images/hero/product-bottle.jpg'],
    inStock: true,
    availableQuantity: 25,
    variants: [
      { id: 'var_soak_400g', title: '400g Glass Jar', pricePaise: 165000, formattedPrice: '₹1,650' },
    ],
    ingredients: [
      'Dead Sea Salt Crystals',
      'Epsom Salt (Magnesium Sulfate)',
      'Lavandula Angustifolia (Lavender) Flower Oil',
      'Prunus Amygdalus Dulcis (Sweet Almond) Oil',
      'Himalayan Pink Salt',
    ],
    howToUse: [
      'Add 2–3 generous handfuls into a warm running bath.',
      'Swirl water gently to dissolve salts.',
      'Soak for 20 minutes to absorb essential trace minerals.',
    ],
  },
  {
    id: 'prod_magnesium_elixir',
    slug: 'daily-balance-magnesium',
    title: 'Daily Balance Magnesium & Botanical Elixir',
    brand: 'SAN ELYSIA',
    category: 'supplements',
    pricePaise: 195000,
    formattedPrice: '₹1,950',
    subtitle: 'Chelated Magnesium Bisglycinate + L-Theanine + Ashwagandha',
    shortDescription:
      'Nourish from within. Supports restorative sleep, muscle ease, and cellular calm for everyday radiance.',
    descriptionHtml: `
      <p>Beauty begins in the nervous system. Highly bioavailable chelated magnesium bisglycinate paired with sun-grown Ashwagandha and Japanese L-Theanine to encourage deep restorative sleep and alleviate daily physical stress.</p>
    `,
    image: '/images/hero/san-elysia-serum-cutout.webp',
    gallery: ['/images/hero/san-elysia-serum-cutout.webp'],
    inStock: true,
    availableQuantity: 50,
    variants: [
      { id: 'var_mag_60caps', title: '60 Vegan Capsules (30-day supply)', pricePaise: 195000, formattedPrice: '₹1,950' },
    ],
    ingredients: [
      'Magnesium Bisglycinate (200mg elemental)',
      'L-Theanine 100mg',
      'KSM-66 Organic Ashwagandha Root 150mg',
      'Vitamin B6 (P-5-P) 5mg',
    ],
    howToUse: [
      'Take 2 capsules with water 30–45 minutes before bedtime.',
      'Store in a cool, dry place away from direct sunlight.',
    ],
  },
  {
    id: 'prod_glow_bundle',
    slug: 'complete-glow-ritual-bundle',
    title: 'The Complete Everyday Glow Ritual',
    brand: 'SAN ELYSIA',
    category: 'bundles',
    pricePaise: 480000,
    formattedPrice: '₹4,800',
    compareAtPricePaise: 540000,
    formattedCompareAtPrice: '₹5,400',
    badge: '12% SAVINGS',
    subtitle: 'Cleanser (150ml) + Balancing Serum (30ml) + Cream (50ml)',
    shortDescription:
      'Three purposeful steps to keep your skin clear, calm, and naturally radiant every single day.',
    descriptionHtml: `
      <p>The core daily ritual formulated to work in perfect synergy. Step 01 cleanses without stripping; Step 02 balances oil and refines texture with 12% Niacinamide; Step 03 seals in barrier ceramides.</p>
      <p>Presented in our keepsake sustainable gift box with complimentary cotton ritual washcloth.</p>
    `,
    image: '/images/hero/hero-product-frame.jpg',
    gallery: [
      '/images/hero/hero-product-frame.jpg',
      '/images/hero/san-elysia-serum-cutout.webp',
      '/images/hero/hero-ritual-model.jpg',
    ],
    inStock: true,
    availableQuantity: 20,
    variants: [
      { id: 'var_bundle_full', title: 'Full 3-Step Ritual', pricePaise: 480000, formattedPrice: '₹4,800' },
    ],
    ingredients: [
      'Full ingredients for Soft Start Cleanser',
      'Full ingredients for Dew Drops Balancing Serum',
      'Full ingredients for Cloud Nine Ceramide Cream',
    ],
    howToUse: [
      'Step 1: Cleanse with Soft Start Cleanser.',
      'Step 2: Press 3–4 drops of Balancing Serum into skin.',
      'Step 3: Lock in moisture with Cloud Nine Cream.',
    ],
  },
];
