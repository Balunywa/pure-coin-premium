import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="mb-6">Ready to get started?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-lg text-muted-foreground mb-10">
              Talk to our team about how Pure Coin can help you build, 
              scale, and secure your technology infrastructure.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 h-14 rounded-lg group"
              >
                <Link to="/contact">
                  Contact sales
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 h-14 rounded-lg"
              >
                <Link to="/solutions">View solutions</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
