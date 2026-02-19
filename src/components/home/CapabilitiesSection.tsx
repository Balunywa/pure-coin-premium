import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/AnimatedText';
import { Code2, Palette, Zap, Brain, Shield, Globe } from 'lucide-react';

const capabilities = [
  { icon: Brain, title: 'Product Strategy', description: 'Vision definition. Market positioning. Roadmap planning. Outcome mapping.' },
  { icon: Palette, title: 'Design Systems', description: 'Component libraries. Design tokens. Accessibility standards. Brand consistency.' },
  { icon: Code2, title: 'Engineering', description: 'Modern frameworks. Cloud infrastructure. CI/CD pipelines. Performance optimization.' },
  { icon: Zap, title: 'Performance', description: 'Sub-second loads. Edge caching. Optimized bundles. Real user monitoring.' },
  { icon: Shield, title: 'Security', description: 'SOC 2 compliance. Penetration testing. Data encryption. Vulnerability management.' },
  { icon: Globe, title: 'Scale', description: 'Multi-region deployment. Auto-scaling. Distributed systems. 99.99% uptime.' },
];

export const CapabilitiesSection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="section-container relative z-10">
        <FadeIn className="mb-16">
          <p className="text-label text-muted-foreground mb-4">What we deliver</p>
          <h2 className="text-foreground mb-4">Enterprise-grade.</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            The infrastructure, velocity, and precision you'd expect from a Fortune 100 team.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <FadeIn key={capability.title} delay={index * 0.05}>
                <motion.div
                  className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-foreground/15 transition-all duration-300 cursor-default"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-5 group-hover:bg-foreground/5 transition-colors">
                    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-medium mb-3 text-foreground">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
