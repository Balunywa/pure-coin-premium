import { PageLayout } from '@/components/layout/PageLayout';
import { HeroSection } from '@/components/home/HeroSection';
import { StorySection } from '@/components/home/StorySection';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { BentoGrid } from '@/components/home/BentoGrid';
import { TechStackSection } from '@/components/home/TechStackSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <StorySection />
      <CapabilitiesSection />
      <BentoGrid />
      <ProductsSection />
      <TechStackSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
