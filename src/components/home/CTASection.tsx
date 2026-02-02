import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/AnimatedText';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const benefits = [
  'No long-term contracts',
  'Transparent pricing',
  'Dedicated team',
  'Weekly updates',
];

export const CTASection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-card/50 to-transparent" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(250 89% 65% / 0.15) 0%, transparent 70%)',
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FadeIn>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/20 border border-primary/30 mb-8"
              >
                <Sparkles className="w-10 h-10 text-primary" />
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="mb-6">
                <span className="gradient-text">Ready to build</span>
                <br />
                <span className="gradient-text-primary">something extraordinary?</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                Whether you're launching a startup or scaling an enterprise, 
                we have the expertise to bring your vision to life.
              </p>
            </FadeIn>

            {/* Benefits */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {benefits.map((benefit) => (
                  <div 
                    key={benefit}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {benefit}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-base px-10 h-14 rounded-full bg-primary hover:bg-primary/90 group"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Start a conversation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base px-10 h-14 rounded-full border-border/50 hover:bg-card hover:border-border"
                >
                  <Link to="/products">View our work</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Bottom note */}
          <FadeIn delay={0.5}>
            <p className="text-center text-muted-foreground text-sm mt-12">
              Typically respond within 24 hours · No commitment required
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
