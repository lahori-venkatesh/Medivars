import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ValueProposition } from '../components/ValueProposition';
import { ReviewSection } from '../components/ReviewSection';
import { FAQSection } from '../components/FAQSection';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <ValueProposition />
      <ReviewSection />
      <FAQSection />
    </div>
  );
}