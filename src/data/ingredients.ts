export interface Ingredient {
  slug: string;
  name: string;
  annotation: string;
  benefit: string;
  description: string;
  benefitsList: string[];
  foundIn: string[];
}

export const ingredients: Ingredient[] = [
  {
    slug: 'niacinamide',
    name: 'Niacinamide (Vitamin B3)',
    annotation: 'CLINICAL BARRIER ACTIVE · 12%',
    benefit: 'Balances surface sebum, clarifies pore congestion, and visibly evens skin tone.',
    description:
      'A true multi-tasker backed by decades of clinical literature. Niacinamide supports healthy ceramide synthesis, diminishes excess surface shine, and strengthens skin barrier resilience against pollution and oxidative stress.',
    benefitsList: [
      'Refines enlarged pores and smooths uneven surface texture',
      'Supports natural ceramide production for optimal barrier hydration',
      'Helps fade lingering post-blemish redness and hyperpigmentation',
      'Non-acidic and compatible with sensitive, reactive skin',
    ],
    foundIn: ['Dew Drops Botanical Balancing Serum', 'The Complete Everyday Glow Ritual'],
  },
  {
    slug: 'zinc-pca',
    name: 'Zinc PCA',
    annotation: 'PURIFYING MINERAL COMPLEX · 1%',
    benefit: 'Regulates oil production without stripping natural moisture.',
    description:
      'Zinc PCA binds elemental zinc with Pyrrolidone Carboxylic Acid—a component of our skin’s Natural Moisturizing Factor (NMF). It provides antibacterial clarity and oil regulation while maintaining skin suppleness.',
    benefitsList: [
      'Inhibits excess 5-alpha reductase enzyme to curb daytime shine',
      'Calms inflammation around active blemishes',
      'Helps preserve moisture rather than stripping like harsh astringents',
    ],
    foundIn: ['Dew Drops Botanical Balancing Serum'],
  },
  {
    slug: 'centella-asiatica',
    name: 'Centella Asiatica (Cica)',
    annotation: 'ORGANIC BOTANICAL EXTRACT',
    benefit: 'Centuries of botanical wisdom to soothe irritation and rebuild compromised skin.',
    description:
      'Also known as Gotu Kola or Tiger Grass, Centella Asiatica contains madecassoside and asiatic acid. It accelerates barrier repair and calms skin flushed from sun exposure, active acids, or seasonal wind.',
    benefitsList: [
      'Relieves immediate stinging, redness, and irritation',
      'Stimulates collagen integrity within delicate skin layers',
      'High antioxidant concentration to combat environmental damage',
    ],
    foundIn: ['Dew Drops Botanical Balancing Serum', 'Soft Start Nourishing Cream Cleanser'],
  },
  {
    slug: 'ceramides',
    name: 'Multi-Ceramide Complex',
    annotation: 'LIPID BARRIER IDENTICAL',
    benefit: 'Replaces the natural lipids that keep skin soft, elastic, and protected.',
    description:
      'Ceramides constitute over 50% of the skin’s natural stratum corneum. Our bio-identical complex of Ceramides NP, AP, and EOP seals microscopic gaps between cells, preventing trans-epidermal water loss (TEWL).',
    benefitsList: [
      'Restores the protective moisture barrier after cleansing',
      'Prevents dryness, flaking, and winter dehydration',
      'Improves long-term elasticity and cushion',
    ],
    foundIn: ['Cloud Nine Daily Ceramide Barrier Cream', 'The Complete Everyday Glow Ritual'],
  },
  {
    slug: 'colloidal-oatmeal',
    name: 'Colloidal Oatmeal',
    annotation: 'DERMATOLOGICAL SOOTHER',
    benefit: 'Gentle avenanthramides that soften and cushion easily sensitized skin.',
    description:
      'Finely milled whole oat grains rich in beta-glucans and avenanthramide polyphenols. Clinical studies prove its efficacy in soothing itchiness, eczema-prone dryness, and barrier sensitivity.',
    benefitsList: [
      'Forms a protective, silky film over sensitive skin',
      'Naturally cleanses without surfactants or foaming agents',
      'Maintains optimal skin surface pH balance',
    ],
    foundIn: ['Soft Start Nourishing Cream Cleanser'],
  },
  {
    slug: 'botanical-squalane',
    name: 'Plant Squalane',
    annotation: 'OLIVE-DERIVED EMOLLIENT',
    benefit: 'Weightless, biomimetic hydration that absorbs instantly with zero pore-clogging.',
    description:
      'Squalane mimics our skin’s natural sebum chemistry, allowing it to penetrate rapidly without feeling greasy. It locks in active water-based serums and imparts an authentic lit-from-within glow.',
    benefitsList: [
      'Non-comedogenic and ideal for acne-prone skin types',
      'Provides a natural, soft-focus satin finish',
      'Enhances the penetration of complementary barrier actives',
    ],
    foundIn: ['Cloud Nine Daily Ceramide Barrier Cream', 'The Complete Everyday Glow Ritual'],
  },
];
