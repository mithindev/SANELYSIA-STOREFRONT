import { HeroSection } from '@/features/home/components/hero/hero-section';
import { FavoritesSection } from '@/features/home/components/favorites-section';
import { PhilosophySection } from '@/features/home/components/philosophy-section';
import { RitualInvitationSection } from '@/features/home/components/ritual-section';
import { QuizCalloutSection } from '@/features/home/components/quiz-callout-section';
import { CommunitySection } from '@/features/home/components/community-section';
import { JournalSection } from '@/features/home/components/journal-section';
import { FaqSection } from '@/features/home/components/faq-section';
import { NewsletterSection } from '@/features/home/components/newsletter-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FavoritesSection />
      <PhilosophySection />
      <RitualInvitationSection />
      <QuizCalloutSection />
      <CommunitySection />
      <JournalSection />
      <FaqSection />
      <NewsletterSection />
    </>
  );
}
