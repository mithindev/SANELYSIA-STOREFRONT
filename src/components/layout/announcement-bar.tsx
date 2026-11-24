import * as React from 'react';
import Link from 'next/link';

export interface AnnouncementBarProps {
  message?: string;
  linkText?: string;
  linkHref?: string;
}

export function AnnouncementBar({
  message = 'A little care. A balanced, healthy-looking glow.',
  linkText = 'Discover your everyday ritual',
  linkHref = '#ritual',
}: AnnouncementBarProps) {
  return (
    <aside
      aria-label="Announcement"
      className="bg-[#3D271D] text-[#FAF7F2] py-2 px-4 border-b border-[#2B1B14] relative z-40"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-center text-center text-[11px] sm:text-xs tracking-[0.16em] uppercase font-sans font-normal">
        <span className="opacity-95">{message}</span>
        {linkText && (
          <>
            <span className="mx-3 opacity-40 select-none">|</span>
            <Link
              href={linkHref}
              className="underline underline-offset-4 opacity-90 hover:opacity-100 transition-opacity font-medium"
            >
              {linkText}
            </Link>
          </>
        )}
      </div>
    </aside>
  );
}
