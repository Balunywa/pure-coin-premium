import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FadeIn } from '@/components/ui/AnimatedText';

const stats = [
  { value: 500, suffix: 'K+', label: 'Users served' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
  { value: 2, suffix: '', label: 'Live products' },
  { value: 24, suffix: '/7', label: 'Support' },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const displayValue = Number.isInteger(value) 
    ? Math.floor(count) 
    : count.toFixed(1);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="text-muted-foreground text-lg">
            Trusted by thousands of users worldwide
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
