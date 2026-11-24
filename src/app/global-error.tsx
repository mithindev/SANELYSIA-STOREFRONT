'use client';

import * as React from 'react';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF7F2] text-[#3D271D] min-h-screen flex items-center justify-center p-6 font-sans">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-serif">SAN ELYSIA</h1>
          <p className="text-sm text-[#685346] mt-3">
            An unexpected error occurred. Please refresh or retry.
          </p>
          <button
            onClick={() => reset()}
            className="mt-6 px-6 py-2.5 bg-[#5A3825] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium cursor-pointer"
          >
            Reload Experience
          </button>
        </div>
      </body>
    </html>
  );
}
