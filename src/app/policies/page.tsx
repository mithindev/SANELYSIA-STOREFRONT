'use client';

import * as React from 'react';
import Link from 'next/link';

const tabs = [
  { id: 'shipping', label: 'Delivery & Shipping' },
  { id: 'returns', label: 'Returns & Exchanges' },
  { id: 'privacy', label: 'Privacy & Data' },
  { id: 'terms', label: 'Terms of Service' },
];

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = React.useState('shipping');

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-14 lg:py-20 min-h-[60vh]">
      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
        CUSTOMER COMMITMENT
      </p>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#3D271D]">
        Store policies.
      </h1>
      <p className="mt-3 text-sm text-[#685346] max-w-lg leading-relaxed">
        Clear, transparent guidelines designed to respect your peace of mind and skin health.
      </p>

      {/* Tabs */}
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-b border-[#3D271D]/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`min-h-12 border-b-2 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer ${
              activeTab === tab.id
                ? 'border-[#3D271D] text-[#3D271D]'
                : 'border-transparent text-[#8E7B6F] hover:text-[#3D271D]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-10 max-w-3xl text-sm leading-relaxed text-[#685346] space-y-6">
        {activeTab === 'shipping' && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-[#3D271D]">Domestic Shipping Across India</h2>
            <p>
              We provide insured door-to-door delivery across all serviceable pin codes in India.
              Orders are packaged in recyclable protective materials and dispatched within 24 hours of
              order placement on business days.
            </p>
            <h3 className="font-serif text-lg text-[#3D271D] pt-2">Rates & Timelines</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Orders above ₹2,500:</strong> Complimentary insured express shipping (2–4 business days in metro cities, 4–6 business days in non-metro).
              </li>
              <li>
                <strong>Orders below ₹2,500:</strong> Flat standard shipping fee of ₹150.
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'returns' && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-[#3D271D]">30-Day Ritual Guarantee</h2>
            <p>
              We want you to feel complete confidence in your skincare. If a product does not agree
              with your skin barrier, you may request a refund or exchange within 30 days of delivery.
            </p>
            <h3 className="font-serif text-lg text-[#3D271D] pt-2">How to Initiate</h3>
            <p>
              Simply email our care concierge at{' '}
              <a href="mailto:care@sanelysia.com" className="text-[#3D271D] underline">
                care@sanelysia.com
              </a>{' '}
              with your order number and brief note. Unopened items receive a 100% refund to the original
              payment method.
            </p>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-[#3D271D]">Privacy & Discretion</h2>
            <p>
              Your data belongs to you. We strictly use customer shipping addresses and contact
              information solely to fulfill physical orders and communicate important updates regarding
              your deliveries.
            </p>
            <p>
              We never sell, broker, or rent your personal data to third-party ad networks. Payment card
              information is processed directly via bank-grade tokenized gateways and is never stored on
              our servers.
            </p>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-[#3D271D]">Terms of Service</h2>
            <p>
              By accessing and placing orders through the SAN ELYSIA storefront, you agree to these
              operating terms. All product descriptions, ingredient percentages, and educational notes
              are formulated with clinical accuracy.
            </p>
            <p>
              All trademarks, product names, emblems, and visual assets are the exclusive property of
              SAN ELYSIA Skincare Labs.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
