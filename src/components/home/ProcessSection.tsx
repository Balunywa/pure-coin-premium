import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/AnimatedText';
import { Lightbulb, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery',
    description: 'We dive deep into your vision, users, and market to define what success looks like.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design',
    description: 'Pixel-perfect interfaces that feel intuitive. Every interaction carefully crafted.',
  },
  {
    number: '03',
    icon: Code,
    title: 'Develop',
    description: 'Clean, scalable code built with modern technologies. Tested. Documented. Secure.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deploy',
    description: 'Launch with confidence. Monitoring, analytics, and support from day one.',
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-32 md:py-40 relative">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm text-sm text-muted-foreground mb-6">
              Our process
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mb-6">
              <span className="gradient-text">From idea to launch</span>
              <br />
              <span className="text-muted-foreground">in weeks, not months.</span>
            </h2>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.15}>
                <motion.div
                  className="relative group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card */}
                  <div className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300 h-full">
                    {/* Number badge */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-light text-primary/50 group-hover:text-primary transition-colors">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
