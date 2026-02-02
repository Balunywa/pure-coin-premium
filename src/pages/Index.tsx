import { PageLayout } from '@/components/layout/PageLayout';
import { HeroSection } from '@/components/home/HeroSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ProductsSection />
      <CTASection />
    </PageLayout>
  );
};

export default Index;
