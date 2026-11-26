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
    title: 'How does your skin feel around midday?',
    caption: 'Think about how your face behaves 4 to 5 hours after your morning cleanse.',
    options: [
      {
        value: 'oily',
        title: 'Noticeably shiny or slick',
        body: 'Particularly along the forehead, nose, and chin, with occasional midday congestion.',
      },
      {
        value: 'combination',
        title: 'Oily in the center, normal on cheeks',
        body: 'My T-zone needs balancing, but my outer cheeks feel comfortable or slightly dry.',
      },
      {
        value: 'dry',
        title: 'Tight or thirsty for moisture',
        body: 'Skin craves comforting hydration and can look dull or slightly flaky without cream.',
      },
      {
        value: 'balanced',
        title: 'Comfortable and generally calm',
        body: 'Neither overly oily nor dry; looking to maintain clarity and healthy long-term glow.',
      },
    ],
  },
  {
    title: 'What is your primary skincare goal right now?',
    caption: 'Choose the area where you would most like to see balanced progress.',
    options: [
      {
        value: 'balance',
        title: 'Clarity, smoother texture & pore refinement',
        body: 'Calming visible redness, regulating oil, and refining the look of enlarged pores.',
      },
      {
        value: 'barrier',
        title: 'Deep barrier hydration & comfort',
        body: 'Soothing irritation, eliminating tightness, and strengthening skin defense.',
      },
      {
        value: 'simplicity',
        title: 'An uncomplicated, high-efficiency ritual',
        body: 'Fewer steps, higher quality essentials that perform reliably every single day.',
      },
      {
        value: 'wellness',
        title: 'Holistic inner & outer restoration',
        body: 'Pairing topical botanical care with restorative evening sleep and stress relief.',
      },
    ],
  },
  {
    title: 'Does your skin easily flush, sting, or react to new products?',
    caption: 'This helps us tailor the gentleness and buffering of recommended actives.',
    options: [
      {
        value: 'yes',
        title: 'Yes, quite easily',
        body: 'My skin often turns pink or stings with active serums, fragrance, or weather shifts.',
      },
      {
        value: 'sometimes',
        title: 'Occasionally, during stress or winter',
        body: 'Certain strong products cause mild sensitivity, but generally resilient.',
      },
      {
        value: 'rarely',
        title: 'Rarely or never',
        body: 'My skin barrier is sturdy and tolerates clinical actives with ease.',
      },
    ],
  },
  {
    title: 'What kind of daily care cadence feels most sustainable for you?',
    caption: 'The most effective routine is always the one you look forward to doing.',
    options: [
      {
        value: 'minimal',
        title: 'The two-step minimalist',
        body: 'Gentle cleanse and a barrier cream. Quick, clean, and out the door.',
      },
      {
        value: 'targeted',
        title: 'The 3-step targeted ritual',
        body: 'Cleanse, active balancing serum, and nourishing moisturizer morning and night.',
      },
      {
        value: 'slow',
        title: 'The holistic self-care ritual',
        body: 'Complete daily skincare paired with evening bath soaks and wellness support.',
      },
    ],
  },
];
