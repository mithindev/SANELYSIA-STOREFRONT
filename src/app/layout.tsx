import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/announcement-bar';
import { Header } from '@/components/layout/header';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SAN ELYSIA — Thoughtful Skincare for Everyday Glow',
    template: '%s | SAN ELYSIA',
  },
  description:
    'Science-informed skincare formulated for balance and clarity. Discover our signature Niacinamide 12% Balancing Serum and targeted everyday rituals.',
  metadataBase: new URL('https://sanelysia.com'),
  keywords: [
    'skincare',
    'serum',
    'balancing serum',
    'niacinamide',
    'thoughtful skincare',
    'clean beauty',
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
      'Science-informed skincare. Feel balanced. Glow naturally. Premium formulations for comfortable, healthy-looking skin.',
    images: [
      {
        url: '/images/products/san-elysia-serum.jpg',
        width: 1024,
        height: 576,
        alt: 'SAN ELYSIA Niacinamide 12% Balancing Serum',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAN ELYSIA — Thoughtful Skincare',
    description: 'Science-informed skincare. Feel balanced. Glow naturally.',
    images: ['/images/products/san-elysia-serum.jpg'],
  },
  icons: {
    icon: '/images/brand/san-elysia-symbol-chocolate.svg',
    shortcut: '/images/brand/san-elysia-symbol-chocolate.svg',
    apple: '/images/brand/san-elysia-symbol-chocolate.svg',
  },
  robots: {
    index: true,
    follow: true,
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
        <AnnouncementBar />
        <Header bagItemCount={0} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
