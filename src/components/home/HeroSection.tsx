import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-[90svh] flex items-center relative overflow-hidden max-w-full">
      <div className="section-container py-32 md:py-40 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Main headline - left aligned, massive, Labelbox style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-8 text-foreground"
          >
            The product studio for ambitious teams
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            From mobile payments to social fitness, we engineer products at the intersection of design and performance — trusted by startups and enterprises alike.
          </motion.p>
          
          {/* CTAs - Labelbox style: filled + text link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex items-center gap-6"
          >
            <Button 
              asChild 
              size="lg" 
              className="text-base px-8 h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 button-shine"
            >
              <Link to="/products" className="flex items-center gap-2">
                Explore our work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="ghost" 
              size="lg"
              className="text-base px-0 h-12 text-foreground hover:bg-transparent hover:underline underline-offset-4"
            >
              <Link to="/contact">Get in touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Trust bar - Labelbox style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 trust-bar"
      >
        <span className="text-label text-muted-foreground text-xs tracking-[0.2em]">
          Trusted by companies of all sizes — from startups to enterprises
        </span>
      </motion.div>
    </section>
  );
};
