import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/announcement-bar';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CartProvider } from '@/components/cart/cart-context';
import { CartDrawer } from '@/components/cart/cart-drawer';
import { MotionProvider } from '@/components/motion';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SAN ELYSIA — Thoughtful Skincare for Everyday Glow',
    template: '%s | SAN ELYSIA',
  },
  description:
    'Science-informed skincare formulated for tone clarity and balance. Discover our Balancing Serum, Sepiwhite Serum, Clear Tone, LumiVitaC, and Intensive Brightening Night Cream.',
  metadataBase: new URL('https://sanelysia.com'),
  keywords: [
    'skincare',
    'balancing serum',
    'niacinamide 12%',
    'sepiwhite serum',
    'kojic acid serum',
    'vitamin c serum',
    'night cream',
    'san elysia',
  ],
  authors: [{ name: 'SAN ELYSIA Skincare Labs' }],
  creator: 'SAN ELYSIA',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sanelysia.com',
    siteName: 'SAN ELYSIA',
    title: 'SAN ELYSIA — Thoughtful Skincare for Everyday Glow',
    description:
      'Targeted serums and overnight brightening care. Feel balanced. Glow naturally.',
    images: [
      {
        url: '/images/products/ritual-collection.jpg',
        width: 1200,
        height: 900,
        alt: 'SAN ELYSIA Brightening & Balancing Skincare Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAN ELYSIA — Thoughtful Skincare',
    description: 'Feel balanced. Glow naturally. Targeted serums & overnight renewal care.',
    images: ['/images/products/ritual-collection.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#FAF7F2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF7F2] text-[#3D271D] selection:bg-[#F5D5B8] selection:text-[#3D271D]">
        <div aria-hidden="true" className="paper-grain" />
        <MotionProvider>
          <CartProvider>
            <AnnouncementBar />
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
