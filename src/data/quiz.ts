export interface QuizQuestion {
  title: string;
  caption: string;
  options: Array<{
    value: string;
    title: string;
    body: string;
  }>;
}

export const quizQuestions: QuizQuestion[] = [
  {
    title: 'What is your primary skincare goal right now?',
    caption: 'Select the concern where you would most like to see visible improvement.',
    options: [
      {
        value: 'oil-pores',
        title: 'Excess oil control & pore refinement',
        body: 'Balancing excess sebum, minimizing the look of enlarged pores, and reducing blemishes.',
      },
      {
        value: 'pigmentation',
        title: 'Dark spots & stubborn pigmentation',
        body: 'Improving the appearance of uneven patches, post-blemish marks, and localized dark spots.',
      },
      {
        value: 'dullness',
        title: 'Dull skin & antioxidant radiance',
        body: 'Brightening dull-looking skin and shielding against daily environmental stressors.',
      },
      {
        value: 'renewal',
        title: 'Overnight moisture & tone renewal',
        body: 'Replenishing softness and suppleness while gently brightening uneven tone overnight.',
      },
    ],
  },
  {
    title: 'How does your skin feel around midday?',
    caption: 'Think about how your face behaves 4 to 5 hours after cleansing.',
    options: [
      {
        value: 'oily',
        title: 'Noticeably shiny or congestion-prone',
        body: 'Especially across the forehead, nose, and chin, with occasional blemishes.',
      },
      {
        value: 'combination',
        title: 'Oily in the T-zone, comfortable or dry on cheeks',
        body: 'Needs lightweight oil balance without stripping hydration from drier areas.',
      },
      {
        value: 'dry',
        title: 'Dry, tight, or lacking suppleness',
        body: 'Benefits from nourishing moisture like Sweet Almond Oil and Sodium Hyaluronate.',
      },
      {
        value: 'balanced',
        title: 'Generally balanced, seeking clarity & glow',
        body: 'Comfortable overall, focused on radiance and keeping skin tone uniform.',
      },
    ],
  },
  {
    title: 'How does your skin typically respond to active ingredients?',
    caption: 'This helps us recommend the gentler soothing base or multi-active pairing for you.',
    options: [
      {
        value: 'sensitive',
        title: 'Easily flushed or sensitive',
        body: 'Needs soothing botanical support like Licorice Extract, Aloe Vera, or Cucumber.',
      },
      {
        value: 'moderate',
        title: 'Occasionally reactive, generally tolerant',
        body: 'Handles targeted actives well when introduced gradually and paired with moisturizer.',
      },
      {
        value: 'resilient',
        title: 'Resilient and accustomed to actives',
        body: 'Comfortable layering morning antioxidant serums and evening brightening care.',
      },
    ],
  },
  {
    title: 'What daily routine cadence suits you best?',
    caption: 'Consistency with sunscreen by day and targeted care by night brings the best results.',
    options: [
      {
        value: 'focused',
        title: 'One targeted serum focus',
        body: 'A single high-impact serum matched to my #1 concern before moisturizer and SPF.',
      },
      {
        value: 'duo',
        title: 'Targeted serum + Night Cream',
        body: 'Pairing daytime or evening serum treatment with intensive overnight renewal.',
      },
      {
        value: 'complete',
        title: 'Complete AM & PM brightening ritual',
        body: 'Morning Vitamin C radiance, evening pigmentation care, and nourishing Night Cream.',
      },
    ],
  },
];
