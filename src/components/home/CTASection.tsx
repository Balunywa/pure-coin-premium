import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="py-32 md:py-40 border-t border-border">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-6 fade-in">
            Let's build something.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 fade-in stagger-1">
            Have an idea? We'd love to hear it.
          </p>
          <div className="fade-in stagger-2">
            <Button 
              asChild 
              size="lg" 
              className="text-base px-10 h-14 rounded-full"
            >
              <Link to="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
