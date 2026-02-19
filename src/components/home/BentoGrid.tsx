import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/AnimatedText';
import { Zap, Shield, Globe, Sparkles, Code2, TrendingUp } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Sub-second load times. Edge-optimized delivery. Real-time performance.', span: 'md:col-span-2' },
  { icon: Shield, title: 'Military-Grade Security', description: 'SOC 2 compliant. Penetration tested. Zero-trust architecture.', span: 'md:col-span-1' },
  { icon: Globe, title: 'Global Scale', description: 'Multi-region deployment. Auto-scaling infrastructure. 99.99% uptime SLA.', span: 'md:col-span-1' },
  { icon: Sparkles, title: 'AI-Powered', description: 'Machine learning optimization. Intelligent caching. Predictive scaling.', span: 'md:col-span-2' },
  { icon: Code2, title: 'Developer First', description: 'Comprehensive APIs. Detailed documentation. SDK for every platform.', span: 'md:col-span-1 md:row-span-2' },
  { icon: TrendingUp, title: 'Built to Scale', description: 'From prototype to IPO. Handles millions of requests per second.', span: 'md:col-span-2' },
];

export const BentoGrid = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden bg-card/30">
      <div className="section-container relative z-10">
        <FadeIn className="mb-16">
          <p className="text-label text-muted-foreground mb-4">Infrastructure</p>
          <h2 className="text-foreground mb-4">Built for scale.</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            The same architecture powering Fortune 500 companies.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={feature.title} delay={index * 0.05}>
                <motion.div
                  className={`${feature.span} p-8 rounded-2xl border border-border bg-background group cursor-default hover:border-foreground/15 transition-all duration-300`}
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-foreground/5 transition-colors">
                      <Icon className="w-6 h-6 text-foreground/70" />
                    </div>
                    <h3 className="text-lg font-medium mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
