import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="min-h-[100svh] flex items-center justify-center relative">
      <div className="section-container py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-8 fade-in">
            We build software.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed fade-in stagger-1">
            Beautiful products. Thoughtful engineering.
            <br />
            Nothing more. Nothing less.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in stagger-2">
            <Button 
              asChild 
              size="lg" 
              className="text-base px-10 h-14 rounded-full"
            >
              <Link to="/products">See our work</Link>
            </Button>
            <Button 
              asChild 
              variant="ghost" 
              size="lg"
              className="text-base px-10 h-14 rounded-full"
            >
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
