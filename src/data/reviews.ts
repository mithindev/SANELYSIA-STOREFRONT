export interface ReviewItem {
  id: string;
  name: string;
  verified: boolean;
  rating: number;
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
    productTitle: 'Dew Drops Botanical Balancing Serum',
    skinType: 'Combination / Sensitive',
    date: 'November 18, 2026',
    title: 'Clearer skin within two weeks without any stinging.',
    body:
      'I have tried high-percentage Niacinamide serums from other brands before that made my cheeks turn red. SAN ELYSIA’s formula is in a totally different league. The Centella base makes it so calming, and my daytime T-zone shine has visibly diminished.',
  },
  {
    id: 'rev_2',
    name: 'Rohan Mehta',
    verified: true,
    rating: 5,
    productTitle: 'The Complete Everyday Glow Ritual',
    skinType: 'Normal to Dry',
    date: 'November 12, 2026',
    title: 'The three products together are absolute magic.',
    body:
      'I wanted a simple routine without a hundred steps. The cleanser melts off sunscreen effortlessly, the serum absorbs instantly, and the ceramide moisturizer leaves my face feeling soft and comfortable all day long.',
  },
  {
    id: 'rev_3',
    name: 'Dr. Meera Iyer',
    verified: true,
    rating: 5,
    productTitle: 'Cloud Nine Daily Ceramide Barrier Cream',
    skinType: 'Sensitive / Eczema Prone',
    date: 'November 05, 2026',
    title: 'A dream formulation for compromised barriers.',
    body:
      'As someone who works long hospital hours wearing masks, my skin barrier was continually irritated. Cloud Nine is lightweight yet intensely comforting. It has restored suppleness to my skin without causing a single breakout.',
  },
  {
    id: 'rev_4',
    name: 'Kavita Menon',
    verified: true,
    rating: 5,
    productTitle: 'Soft Start Nourishing Cream Cleanser',
    skinType: 'Dry / Sensitive',
    date: 'October 29, 2026',
    title: 'Finally a cleanser that leaves my face calm!',
    body:
      'No tight or squeaky feeling whatsoever. It washes away completely clean and leaves my face feeling like velvet. A true staple in my morning ritual.',
  },
  {
    id: 'rev_5',
    name: 'Siddharth Rao',
    verified: true,
    rating: 5,
    productTitle: 'Daily Balance Magnesium & Botanical Elixir',
    skinType: 'All Skin Types',
    date: 'October 22, 2026',
    title: 'Deep sleep and relaxed mornings.',
    body:
      'I started taking this 45 minutes before bed and the difference in my sleep quality is undeniable. Waking up feeling rested has had a direct visible impact on my under-eye area.',
  },
];
