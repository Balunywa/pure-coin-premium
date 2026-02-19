import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/AnimatedText';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-foreground mb-6">Let's build.</h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Tell us what you're building. We'll architect it, design it, and ship it.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Button
              asChild
              size="lg"
              className="text-base px-8 h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 button-shine"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
