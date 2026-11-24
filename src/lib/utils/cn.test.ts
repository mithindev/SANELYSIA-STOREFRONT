import { describe, it, expect } from 'vitest';
import { cn, formatPaise } from './cn';

describe('formatPaise', () => {
  it('formats whole rupee amounts without trailing decimals by default', () => {
    expect(formatPaise(79900)).toBe('₹799');
    expect(formatPaise(129900)).toBe('₹1,299');
    expect(formatPaise(349900)).toBe('₹3,499');
  });

  it('formats fractional rupee amounts correctly with decimals', () => {
    expect(formatPaise(79950)).toBe('₹799.50');
  });

  it('forces decimals when showDecimals is true', () => {
    expect(formatPaise(79900, { showDecimals: true })).toBe('₹799.00');
  });
});

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2');
    expect(cn('px-4', undefined, null, false && 'hidden', 'px-6')).toBe('px-6');
  });
});
