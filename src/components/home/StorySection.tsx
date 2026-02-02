import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FadeIn } from '@/components/ui/AnimatedText';
import { Star, Wand2, Gem } from 'lucide-react';

const storySteps = [
  {
    title: 'Discovery',
    description: 'Define the vision. Align on outcomes. Map the technical architecture.',
    icon: Star,
  },
  {
    title: 'Design',
    description: 'Craft the system. Refine every interaction. Build the foundation.',
    icon: Wand2,
  },
  {
    title: 'Delivery',
    description: 'Ship with confidence. Monitor performance. Iterate with data.',
    icon: Gem,
  },
];

const metrics = [
  { label: 'Engineering years', value: '12+' },
  { label: 'Products launched', value: '30+' },
  { label: 'Time to market', value: '8–12 wks' },
];

const principles = [
  'Design systems',
  'Performance-first',
  'Production-ready',
];

export const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 relative overflow-hidden"
    >
      {/* Dot matrix background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 50%, hsl(0 0% 100% / 0.02) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-label opacity-70">How we work</p>
            <h2 className="gradient-text">Precision at scale.</h2>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto leading-[1.7]">
              We architect systems, design with intent, and ship products that perform from day one.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mb-16">
            <motion.div 
              className="lux-card px-6 py-5 md:px-8"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {metrics.map((metric) => (
                  <div key={metric.label} className="py-2">
                    <p className="text-2xl md:text-3xl font-medium tracking-tight">{metric.value}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}              </div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.15} className="mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              {principles.map((principle, index) => (
                <motion.div 
                  key={principle} 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="px-4 py-2 rounded-full border border-border/50 bg-card/40">
                    {principle}
                  </span>
                  {index < principles.length - 1 && (
                    <span className="hidden md:inline-block w-10 h-px bg-border/50" />
                  )}
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 hidden md:block" />

            {/* Animated SVG path */}
            <svg
              className="absolute left-1/2 top-0 hidden md:block -translate-x-1/2"
              width="2"
              height="100%"
              viewBox="0 0 2 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M1 0 L1 100"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                strokeDasharray="1 1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
            </svg>

            <div className="space-y-8">
              {storySteps.map((step, index) => {
                const Icon = step.icon;
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className={`grid md:grid-cols-2 gap-6 items-center ${isLeft ? '' : 'md:text-right'}`}>
                      <div className={`${isLeft ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                        <div className="lux-card p-8">
                          <div className={`flex items-center gap-4 ${isLeft ? '' : 'md:justify-end'}`}>
                            <div className="w-12 h-12 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-foreground/80" />
                            </div>
                            <h3 className="text-2xl">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground mt-4">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                            0{index + 1}
                            <span className="h-px w-12 bg-border/50" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Connector dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-foreground/80 shadow-[0_0_20px_rgba(255,255,255,0.3)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
