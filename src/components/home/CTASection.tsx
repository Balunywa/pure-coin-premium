import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/AnimatedText';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(250 89% 65% / 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="mb-6">
              <span className="gradient-text">Let's build something.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl mb-12 leading-relaxed">
              Have an idea? We'd love to hear about it.
              <br className="hidden sm:block" />
              Let's create something extraordinary together.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Button
              asChild
              size="lg"
              className="text-base px-8 h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Start a conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
