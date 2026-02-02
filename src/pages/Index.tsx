import { PageLayout } from '@/components/layout/PageLayout';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { SolutionsSection } from '@/components/home/SolutionsSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { WhySection } from '@/components/home/WhySection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <TrustBar />
      <SolutionsSection />
      <ProductsSection />
      <WhySection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
