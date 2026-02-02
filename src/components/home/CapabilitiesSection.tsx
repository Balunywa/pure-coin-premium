import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/AnimatedText';
import { Code2, Palette, Rocket, Shield, Zap, Users } from 'lucide-react';

const capabilities = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'From frontend to backend, we build complete solutions using modern technologies.',
  },
  {
    icon: Palette,
    title: 'Product Design',
    description: 'User-centered design that balances beauty with functionality.',
  },
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Ship fast without compromising quality. CI/CD pipelines built-in.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security practices from day one.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized for speed. Sub-second load times, always.',
  },
  {
    icon: Users,
    title: 'Scale Ready',
    description: 'Architecture that grows with you. From MVP to millions.',
  },
];

export const CapabilitiesSection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-sm text-muted-foreground mb-6">
              What we do
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mb-6">
              <span className="gradient-text">End-to-end product</span>
              <br />
              <span className="text-muted-foreground">development.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground">
              We handle everything from concept to launch. Strategy, design, 
              development, and ongoing support—all under one roof.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <FadeIn key={capability.title} delay={index * 0.1}>
              <motion.div
                className="group p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-foreground">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
