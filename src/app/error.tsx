'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('Unhandled Storefront Runtime Error:', error);
  }, [error]);

  return (
    <Container className="py-24 text-center">
      <div className="max-w-md mx-auto">
        <span className="font-sans text-xs tracking-[0.24em] uppercase text-[#8E7B6F]">
          APPLICATION NOTICE
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#3D271D] mt-3">
          Something went slightly off-track
        </h1>
        <p className="font-sans text-sm text-[#685346] mt-4 leading-relaxed">
          We encountered an unexpected condition while loading this ritual. A quick retry usually
          resolves it immediately.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button variant="primary" onClick={() => reset()}>
            TRY AGAIN
          </Button>
          <Link href="/">
            <Button variant="secondary">RETURN HOME</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
