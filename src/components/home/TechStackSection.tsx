import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/AnimatedText';

const technologies = [
  {
    category: 'Frontend',
    color: 'rgba(59, 130, 246, 0.3)', // Blue
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    category: 'Backend',
    color: 'rgba(16, 185, 129, 0.3)', // Emerald
    stack: ['Node.js', 'Python', 'GraphQL', 'PostgreSQL'],
  },
  {
    category: 'Infrastructure',
    color: 'rgba(139, 92, 246, 0.3)', // Violet
    stack: ['Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
];

// Data packet positions flowing through the system
const dataFlowPaths = [
  { from: 0, to: 1, delay: 0 },
  { from: 1, to: 2, delay: 0.8 },
  { from: 0, to: 1, delay: 1.6 },
  { from: 1, to: 2, delay: 2.4 },
];

export const TechStackSection = () => {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <FadeIn className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 text-label opacity-70">Technology</p>
          <h2 className="gradient-text mb-6">Built on the best.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-[1.7]">
            The tools that power billion-user platforms. Optimized for performance and scale.
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {/* Architecture Diagram */}
          <div className="relative">
            {/* Connection lines between layers */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Frontend to Backend connections */}
              <motion.line
                x1="50%" y1="33%" x2="50%" y2="50%"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              {/* Backend to Infrastructure connections */}
              <motion.line
                x1="50%" y1="66%" x2="50%" y2="83%"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </svg>

            {/* Animated data packets flowing through system */}
            {dataFlowPaths.map((path, idx) => (
              <motion.div
                key={idx}
                className="absolute left-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                style={{
                  top: `${33 + (path.from * 16.5)}%`,
                  x: '-50%',
                }}
                animate={{
                  top: `${33 + (path.to * 16.5)}%`,
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.2,
                  delay: path.delay,
                  repeat: Infinity,
                  repeatDelay: 1.6,
                  ease: 'easeInOut',
                }}
              />
            ))}

            {/* Technology layers */}
            <div className="space-y-8 relative z-10">
              {technologies.map((tech, index) => (
                <FadeIn key={tech.category} delay={index * 0.15}>
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className="lux-card p-8 relative overflow-hidden">
                      {/* Colored grid pattern for each layer */}
                      <div 
                        className="absolute inset-0 pointer-events-none opacity-100"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, ${tech.color} 1px, transparent 1px),
                            linear-gradient(to bottom, ${tech.color} 1px, transparent 1px)
                          `,
                          backgroundSize: '40px 40px',
                        }}
                      />
                      
                      {/* Pulse effect on hover */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${tech.color}, transparent 70%)`,
                        }}
                        animate={{
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2 opacity-70">
                              Layer {index + 1}
                            </div>
                            <h3 className="text-2xl font-medium text-foreground">
                              {tech.category}
                            </h3>
                          </div>
                          {/* Status indicator */}
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs font-medium text-green-400">Active</span>
                          </div>
                        </div>
                        
                        {/* Tech stack pills */}
                        <div className="flex flex-wrap gap-2">
                          {tech.stack.map((item, i) => (
                            <motion.div
                              key={item}
                              className="px-3 py-1.5 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm text-sm"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.15 + i * 0.05 }}
                              whileHover={{ scale: 1.05, borderColor: tech.color }}
                            >
                              {item}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Connection node */}
                    {index < technologies.length - 1 && (
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground/30 border-2 border-background shadow-lg z-20" />
                    )}
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Additional info */}
        <FadeIn delay={0.6} className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Real-time data flow
            </span>
            <span className="w-px h-4 bg-border/50" />
            <span>99.99% Uptime</span>
            <span className="w-px h-4 bg-border/50" />
            <span>SOC 2 Certified</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
