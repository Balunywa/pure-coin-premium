import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/AnimatedText';
import { Zap, Shield, Globe, Sparkles, Code2, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second load times. Edge-optimized delivery. Real-time performance.',
    span: 'md:col-span-2',
  },
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'SOC 2 compliant. Penetration tested. Zero-trust architecture.',
    span: 'md:col-span-1',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Multi-region deployment. Auto-scaling infrastructure. 99.99% uptime SLA.',
    span: 'md:col-span-1',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered',
    description: 'Machine learning optimization. Intelligent caching. Predictive scaling.',
    span: 'md:col-span-2',
  },
  {
    icon: Code2,
    title: 'Developer First',
    description: 'Comprehensive APIs. Detailed documentation. SDK for every platform.',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    icon: TrendingUp,
    title: 'Built to Scale',
    description: 'From prototype to IPO. Handles millions of requests per second.',
    span: 'md:col-span-2',
  },
];

export const BentoGrid = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.015]" />

      <div className="section-container relative z-10">
        <FadeIn className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-label">
            Infrastructure
          </p>
          <h2 className="gradient-text mb-6">Enterprise architecture.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The same infrastructure powering Fortune 500 companies—now available for your product.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={feature.title} delay={index * 0.05}>
                <motion.div
                  className={`${feature.span} p-8 lux-card group cursor-default`}
                  whileHover={{ scale: 1.01, y: -2 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <div className="flex flex-col h-full">
                    <motion.div
                      className="w-12 h-12 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-6 group-hover:bg-foreground/8 group-hover:border-foreground/20 transition-all"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-foreground/80" />
                    </motion.div>
                    
                    <h3 className="text-xl font-medium mb-3 group-hover:text-foreground transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
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
