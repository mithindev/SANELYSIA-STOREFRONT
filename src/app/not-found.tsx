import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <div className="max-w-md mx-auto">
        <span className="font-sans text-xs tracking-[0.24em] uppercase text-[#8E7B6F]">
          PAGE NOT FOUND
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#3D271D] mt-3">
          This ritual could not be found
        </h1>
        <p className="font-sans text-sm text-[#685346] mt-4 leading-relaxed">
          The requested page or formulation might have been moved, renamed, or is temporarily
          unavailable.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button variant="primary">RETURN TO HOME</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
