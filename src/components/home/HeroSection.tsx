import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-[100svh] flex items-center justify-center relative overflow-hidden film-grain max-w-full">
      <AnimatedBackground />
      
      <div className="section-container py-32 md:py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
              Built different
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-6"
          >
            <span className="gradient-text block">Software that</span>
            <span className="text-foreground block">sets the standard.</span>
          </motion.h1>
          
          {/* Subheadline with gradient */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We engineer products at the intersection of
            <span className="text-foreground"> design and performance.</span>
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton strength={0.08}>
              <Button 
                asChild 
                size="lg" 
                className="text-base px-8 h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 group button-shine shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link to="/products" className="flex items-center gap-2">
                  Explore our work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.06}>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 h-12 rounded-full border-border/50 hover:bg-card hover:border-foreground/20 transition-colors"
              >
                <Link to="/contact">Get in touch</Link>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <span className="uppercase tracking-[0.25em] text-xs text-label">Trusted in</span>
            <div className="flex items-center gap-3">
              {['Fintech', 'Healthcare', 'Enterprise'].map((label) => (
                <span
                  key={label}
                  className="px-3 py-1.5 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm text-xs text-mono"
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-border/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-muted-foreground"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
