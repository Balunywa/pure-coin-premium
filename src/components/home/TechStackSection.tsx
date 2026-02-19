import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu } from 'lucide-react';
import { FadeIn } from '@/components/ui/AnimatedText';

const technologies = [
  { id: 'frontend', category: 'Interface Layer', icon: Code2, stack: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
  { id: 'backend', category: 'Computation Layer', icon: Cpu, stack: ['Node.js', 'Python', 'GraphQL', 'PostgreSQL'] },
  { id: 'infra', category: 'Global Network', icon: Globe, stack: ['Azure', 'Docker', 'Kubernetes', 'Terraform'] },
];

export const TechStackSection = () => {
  return (
    <section className="py-32 md:py-40 bg-card/30 relative overflow-hidden">
      <div className="max-w-3xl w-full mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="text-label text-muted-foreground mb-4">System Architecture</p>
          <h2 className="text-foreground mb-4">The tech stack.</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            A fully reactive, event-driven infrastructure built for scale.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <FadeIn key={tech.id} delay={index * 0.1}>
                <div className="group p-6 rounded-2xl border border-border bg-background hover:border-foreground/15 transition-all duration-300">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-muted group-hover:bg-foreground/5 transition-colors">
                        <Icon className="w-6 h-6 text-foreground/70" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-foreground">{tech.category}</h3>
                        <p className="text-sm text-muted-foreground">{tech.stack.join(' · ')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
