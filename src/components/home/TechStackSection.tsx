import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/AnimatedText';

const technologies = [
  {
    category: 'Frontend',
    stack: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 92 },
      { name: 'TypeScript', level: 98 },
      { name: 'Tailwind', level: 96 },
    ],
  },
  {
    category: 'Backend',
    stack: [
      { name: 'Node.js', level: 94 },
      { name: 'Python', level: 88 },
      { name: 'GraphQL', level: 90 },
      { name: 'PostgreSQL', level: 92 },
    ],
  },
  {
    category: 'Infrastructure',
    stack: [
      { name: 'AWS', level: 91 },
      { name: 'Docker', level: 93 },
      { name: 'Kubernetes', level: 85 },
      { name: 'Terraform', level: 87 },
    ],
  },
];

export const TechStackSection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <FadeIn className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-label">Technology</p>
          <h2 className="gradient-text mb-6">Industry standard. Executed flawlessly.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We use the tools that power billion-user platforms—optimized for performance, security, and scale.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <FadeIn key={tech.category} delay={index * 0.1}>
              <div className="lux-card p-8">
                <h3 className="text-lg font-medium mb-6 text-foreground/90">
                  {tech.category}
                </h3>
                <div className="space-y-5">
                  {tech.stack.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-xs text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-foreground to-foreground/60 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1 + i * 0.05 + 0.2,
                            ease: [0.25, 0.4, 0.25, 1],
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Additional info */}
        <FadeIn delay={0.4} className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span>CI/CD Pipeline</span>
            <span className="w-px h-4 bg-border/50" />
            <span>99.99% Uptime</span>
            <span className="w-px h-4 bg-border/50" />
            <span>SOC 2 Ready</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
