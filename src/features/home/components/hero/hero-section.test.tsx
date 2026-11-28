import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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
      screen.getByRole('button', { name: /EXPLORE THE COLLECTION/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /FIND YOUR RITUAL/i })
    ).toBeInTheDocument();
  });

  it('renders the 3-item benefit row', () => {
    render(<HeroSection />);
    expect(screen.getByText(/SERUMS & NIGHT CARE/i)).toBeInTheDocument();
    expect(screen.getByText(/TONE CLARITY/i)).toBeInTheDocument();
    expect(screen.getByText(/FULL INCI/i)).toBeInTheDocument();
  });

  it('renders the editorial ritual card and bottom indicator', () => {
    render(<HeroSection />);
    expect(screen.getByText('01 — THE EVERYDAY RITUAL')).toBeInTheDocument();
    expect(screen.getByText('Five purposeful formulas.')).toBeInTheDocument();
    expect(screen.getByText('A THOUGHTFUL APPROACH TO SKINCARE')).toBeInTheDocument();
  });

  it('renders all 5 interactive product bottles and reveals 4 active ingredient splash cards on click', async () => {
    render(<HeroSection />);

    const clearToneBtn = screen.getByRole('button', {
      name: /Inspect ingredients for Clear Tone/i,
    });
    expect(clearToneBtn).toHaveAttribute('aria-pressed', 'false');

    fireEvent.click(clearToneBtn);

    expect(clearToneBtn).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('Kojic Acid')).toBeInTheDocument();
    expect(screen.getByText('Azelaic Acid')).toBeInTheDocument();
    expect(screen.getByText('Licorice Extract')).toBeInTheDocument();
    expect(screen.getByText('Camellia Leaf')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add to bag/i })).toBeInTheDocument();

    // Switching directly to LumiVitaC updates splash ingredients
    const lumiBtn = screen.getByRole('button', {
      name: /Inspect ingredients for LumiVitaC/i,
    });
    fireEvent.click(lumiBtn);
    expect(lumiBtn).toHaveAttribute('aria-pressed', 'true');
    await waitFor(() => {
      expect(screen.getByText('Vitamin C')).toBeInTheDocument();
      expect(screen.getByText('Glutathione')).toBeInTheDocument();
    });

    // Pressing Escape collapses back to resting podium view
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(lumiBtn).toHaveAttribute('aria-pressed', 'false');
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /Close ingredient view/i })).not.toBeInTheDocument();
    });
  });

  it('selects matching product spotlight when clicking a skin concern macro card', () => {
    render(<HeroSection />);

    const oilConcernBtn = screen.getByRole('button', {
      name: /Inspect formula for OIL CONTROL & PORES/i,
    });
    fireEvent.click(oilConcernBtn);

    expect(oilConcernBtn).toHaveAttribute('aria-pressed', 'true');
    expect(
      screen.getByRole('button', { name: /Inspect ingredients for Balancing Serum/i })
    ).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('Zinc PCA')).toBeInTheDocument();
    expect(screen.getByText('Salicylic Acid')).toBeInTheDocument();
  });
});
