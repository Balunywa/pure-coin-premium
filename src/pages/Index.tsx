import { PageLayout } from '@/components/layout/PageLayout';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { CapabilitiesSection } from '@/components/home/CapabilitiesSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <StatsSection />
      <CapabilitiesSection />
      <ProcessSection />
      <ProductsSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
