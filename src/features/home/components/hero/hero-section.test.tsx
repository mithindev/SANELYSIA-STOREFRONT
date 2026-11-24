import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroSection } from './hero-section';

describe('HeroSection component', () => {
  it('renders the editorial headline and italic highlight', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Feel balanced./i)).toBeInTheDocument();
    expect(screen.getByText(/naturally./i)).toBeInTheDocument();
  });

  it('renders the science-informed skincare eyebrow', () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/SCIENCE-INFORMED SKINCARE\. MADE FOR YOU\./i)
    ).toBeInTheDocument();
  });

  it('renders both primary and secondary call-to-action buttons', () => {
    render(<HeroSection />);
    expect(
      screen.getByRole('button', { name: /SHOP THE BALANCING SERUM/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /FIND YOUR RITUAL/i })
    ).toBeInTheDocument();
  });

  it('renders the 3-item benefit row', () => {
    render(<HeroSection />);
    expect(screen.getByText('TARGETED FORMULATIONS')).toBeInTheDocument();
    expect(screen.getByText('GENTLE, EVERYDAY CARE')).toBeInTheDocument();
    expect(screen.getByText('CLEARER, MORE BALANCED SKIN')).toBeInTheDocument();
  });

  it('renders the editorial ritual card and bottom indicator', () => {
    render(<HeroSection />);
    expect(screen.getByText('01 — THE EVERYDAY RITUAL')).toBeInTheDocument();
    expect(screen.getByText('A little more balance.')).toBeInTheDocument();
    expect(screen.getByText('A THOUGHTFUL APPROACH TO SKINCARE')).toBeInTheDocument();
  });
});
