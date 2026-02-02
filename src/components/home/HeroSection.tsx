import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const HeroSection = () => {
  return (
    <section className="min-h-[90svh] flex items-center relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="section-container py-24 md:py-32">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-6">
              Software & Technology
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h1 className="mb-8">
              Build the future
              <br />
              <span className="text-muted-foreground">with software that scales.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Enterprise-grade software solutions. From cloud infrastructure 
              to consumer applications—we engineer technology that powers growth.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 h-14 rounded-lg group"
              >
                <Link to="/solutions">
                  Explore solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 h-14 rounded-lg"
              >
                <Link to="/contact">Contact sales</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Subtle gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};
