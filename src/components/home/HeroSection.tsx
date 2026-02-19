import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { HeroAnimation } from '@/components/home/HeroAnimation';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-[100svh] flex items-center relative overflow-hidden film-grain max-w-full">
      <AnimatedBackground />
      
      <div className="section-container py-32 md:py-40 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text content */}
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="mb-8"
            >
              <span className="gradient-text block">Software that</span>
              <span className="text-foreground block">sets the standard.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-xl md:text-2xl text-muted-foreground max-w-lg mb-12 leading-relaxed"
            >
              We engineer products at the intersection of
              <span className="text-foreground"> design and performance.</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex items-center gap-6"
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
                  variant="ghost" 
                  size="lg"
                  className="text-base px-0 h-12 text-muted-foreground hover:text-foreground hover:bg-transparent"
                >
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right: Animated product visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </div>

      {/* Trust bar at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 trust-bar"
      >
        <span className="uppercase tracking-[0.25em] text-xs text-label text-muted-foreground">Trusted in</span>
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
    </section>
  );
};
