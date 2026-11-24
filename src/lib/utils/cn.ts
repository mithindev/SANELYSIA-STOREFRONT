import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats an integer amount in paise into formatted currency string (INR).
 * 79900 paise -> "₹799" (or "₹799.00" if decimals needed)
 */
export function formatPaise(paise: number, options: { showDecimals?: boolean } = {}): string {
  const rupees = paise / 100;
  if (!options.showDecimals && Number.isInteger(rupees)) {
    return `₹${rupees.toLocaleString('en-IN')}`;
  }
  return `₹${rupees.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
