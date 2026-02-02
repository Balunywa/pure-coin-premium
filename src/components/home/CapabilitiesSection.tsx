import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/AnimatedText';
import { Code2, Palette, Zap, Brain, Shield, Globe } from 'lucide-react';

const capabilities = [
  {
    icon: Brain,
    title: 'Product Strategy',
    description: 'Vision definition. Market positioning. Roadmap planning. Outcome mapping.',
    gradient: 'from-violet-500/10 via-purple-500/5 to-transparent',
  },
  {
    icon: Palette,
    title: 'Design Systems',
    description: 'Component libraries. Design tokens. Accessibility standards. Brand consistency.',
    gradient: 'from-blue-500/10 via-cyan-500/5 to-transparent',
  },
  {
    icon: Code2,
    title: 'Engineering',
    description: 'Modern frameworks. Cloud infrastructure. CI/CD pipelines. Performance optimization.',
    gradient: 'from-emerald-500/10 via-green-500/5 to-transparent',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Sub-second loads. Edge caching. Optimized bundles. Real user monitoring.',
    gradient: 'from-amber-500/10 via-yellow-500/5 to-transparent',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'SOC 2 compliance. Penetration testing. Data encryption. Vulnerability management.',
    gradient: 'from-red-500/10 via-pink-500/5 to-transparent',
  },
  {
    icon: Globe,
    title: 'Scale',
    description: 'Multi-region deployment. Auto-scaling. Distributed systems. 99.99% uptime.',
    gradient: 'from-indigo-500/10 via-purple-500/5 to-transparent',
  },
];

export const CapabilitiesSection = () => {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />

      <div className="section-container relative z-10">
        <FadeIn className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-label">What we deliver</p>
          <h2 className="gradient-text mb-6">Enterprise-grade.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-[1.7]">
            The infrastructure, velocity, and precision you'd expect from a Fortune 100 team.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <FadeIn key={capability.title} delay={index * 0.05}>
                <motion.div
                  className="group relative p-8 rounded-3xl border border-border/40 bg-card/20 backdrop-blur-sm overflow-hidden cursor-default"
                  whileHover={{ y: -2 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  {/* Hover gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent blur-xl" />
                  </div>

                  <div className="relative">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center mb-5 group-hover:border-foreground/30 transition-colors"
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </motion.div>

                    <h3 className="text-xl font-medium mb-3 group-hover:text-foreground transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-foreground/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
