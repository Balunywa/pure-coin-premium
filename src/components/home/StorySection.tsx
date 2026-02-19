import { motion } from 'framer-motion';
import { Star, Wand2, Gem } from 'lucide-react';
import { FadeIn } from '@/components/ui/AnimatedText';

const storySteps = [
  {
    id: 'discovery',
    title: 'Discovery',
    description: 'Define the vision. Align on outcomes. Map the technical architecture.',
    icon: Star,
    number: '01',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Craft the system. Refine every interaction. Build the foundation.',
    icon: Wand2,
    number: '02',
  },
  {
    id: 'delivery',
    title: 'Delivery',
    description: 'Ship with confidence. Monitor performance. Iterate with data.',
    icon: Gem,
    number: '03',
  },
];

export const StorySection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Stats row */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 border-b border-border pb-12">
            {[
              { label: 'Engineering Excellence', value: '12+', sub: 'Years' },
              { label: 'Products Shipped', value: '30+', sub: 'Global' },
              { label: 'Time to Market', value: '8wks', sub: 'Average' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-medium text-foreground mb-2 tracking-tight">{stat.value}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-[0.15em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Process cards */}
        <FadeIn className="mb-16">
          <h2 className="text-foreground mb-4">Our process.</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A proven framework for building world-class products.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {storySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.id} delay={index * 0.1}>
                <div className="group p-8 rounded-2xl border border-border bg-card hover:border-foreground/15 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-foreground/5 transition-colors">
                      <Icon className="w-6 h-6 text-foreground/70" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
