import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './header';

describe('Header component', () => {
  it('renders the SAN ELYSIA brand logo and title', () => {
    render(<Header />);
    expect(screen.getByText('SAN ELYSIA')).toBeInTheDocument();
    expect(screen.getByText('THOUGHTFUL SKINCARE')).toBeInTheDocument();
  });

  it('renders all primary desktop navigation links', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'SHOP' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'THE FORMULA' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'SKIN JOURNAL' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'OUR PHILOSOPHY' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'FIND YOUR RITUAL' })).toBeInTheDocument();
  });

  it('toggles mobile drawer navigation on hamburger click', () => {
    render(<Header />);
    const toggleBtn = screen.getByLabelText('Open Menu');
    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();
    expect(screen.getByRole('dialog', { name: 'Navigation Menu' })).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Close Menu'));
    expect(screen.queryByRole('dialog', { name: 'Navigation Menu' })).not.toBeInTheDocument();
  });
});
