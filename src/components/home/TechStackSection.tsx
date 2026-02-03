import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu } from 'lucide-react';

// --- Configuration ---
const technologies = [
  {
    id: 'frontend',
    category: 'Interface Layer',
    icon: Code2,
    color: '#3B82F6', // Blue
    freq: '3.4 Ghz',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'backend',
    category: 'Computation Layer',
    icon: Cpu,
    color: '#10B981', // Emerald
    freq: '800ms',
    stack: ['Node.js', 'Python', 'GraphQL', 'PostgreSQL'],
  },
  {
    id: 'infra',
    category: 'Global Network',
    icon: Globe,
    color: '#8B5CF6', // Violet
    freq: '99.99%',
    stack: ['Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
];

// --- 1. The Living Grid (The "Matrix" Background) ---
const ActiveGrid = ({ color }: { color: string }) => {
  const horizontalLines = Array.from({ length: 6 }).map((_, i) => i * 20 + 10);
  const verticalLines = Array.from({ length: 8 }).map((_, i) => i * 20 + 10);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="absolute inset-0 w-full h-full" width="100%" height="100%">
        <defs>
          <pattern id={`grid-${color}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={color} strokeWidth="0.5" strokeOpacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${color})`} />
      </svg>

      {horizontalLines.map((y, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-[1px] w-8 bg-white shadow-[0_0_5px_white]"
          style={{ top: `${y}%`, left: '-10%', backgroundColor: color }}
          animate={{ left: ['-10%', '110%'] }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
            repeatDelay: Math.random() * 3
          }}
        />
      ))}

      {verticalLines.map((x, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-[1px] h-8 bg-white shadow-[0_0_5px_white]"
          style={{ left: `${x}%`, top: '-10%', backgroundColor: color }}
          animate={{ top: ['-10%', '110%'] }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
            repeatDelay: Math.random() * 3
          }}
        />
      ))}
    </div>
  );
};

// --- 2. The High-Fidelity Card ---
const CircuitCard = ({ tech, index }: { tech: typeof technologies[0], index: number }) => {
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative z-10 group"
    >
      <div 
        className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"
        style={{ backgroundImage: `linear-gradient(to right, transparent, ${tech.color}, transparent)` }}
      />
      
      <div className="relative bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden h-full">
        <ActiveGrid color={tech.color} />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
        />

        <div className="relative p-6 flex items-center justify-between gap-6 backdrop-blur-[1px]">
          <div className="flex items-center gap-5">
            <div className="relative w-14 h-14 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
              <Icon className="w-7 h-7 text-white/90" />
              <motion.div 
                className="absolute inset-0 border-t border-r border-transparent rounded-lg"
                style={{ borderTopColor: tech.color, borderRightColor: tech.color }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">{tech.category}</h3>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/5 text-white/50 border border-white/5">
                  {tech.freq}
                </span>
              </div>
              <div className="flex gap-2 text-sm text-white/40">
                {tech.stack.join(' • ')}
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end gap-1">
            <div className="flex gap-1 h-3 items-end">
              {[1, 2, 3].map((bar) => (
                <motion.div
                  key={bar}
                  className="w-1 bg-white/20 rounded-sm"
                  animate={{ height: ['20%', '100%', '20%'] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: bar * 0.1,
                    ease: "easeInOut"
                  }}
                  style={{ backgroundColor: tech.color }}
                />
              ))}
            </div>
            <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">
              Live
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- 3. The "Heavy" Data Cable ---
const DataCable = ({ color }: { color: string }) => {
  return (
    <div className="relative w-full h-16 flex justify-center overflow-hidden">
      <div className="w-[2px] h-full bg-white/5 relative">
        <motion.div
          className="absolute top-0 w-full bg-gradient-to-b from-transparent via-white to-transparent"
          style={{ 
            height: '60%', 
            opacity: 0.8,
            boxShadow: `0 0 20px 2px ${color}`
          }}
          animate={{ top: ['-100%', '200%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "circIn" }}
        />
        <motion.div
          className="absolute top-0 w-full bg-white/50"
          style={{ height: '20%' }}
          animate={{ top: ['-100%', '200%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
      </div>
    </div>
  );
};

// --- Main Component ---
export const TechStackSection = () => {
  return (
    <section className="min-h-screen bg-[#020202] py-32 flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl w-full mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block mb-4 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="text-xs font-mono text-white/60 tracking-widest uppercase">
              System Architecture v2.0
            </span>
          </motion.div>
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            The Neural Grid.
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-lg">
            A fully reactive, event-driven infrastructure that thinks before it acts.
          </p>
        </div>

        <div className="flex flex-col">
          <DataCable color={technologies[0].color} />
          
          {technologies.map((tech, index) => (
            <React.Fragment key={tech.id}>
              <CircuitCard tech={tech} index={index} />
              
              {index < technologies.length - 1 && (
                <DataCable color={technologies[index + 1].color} />
              )}
            </React.Fragment>
          ))}
          
          <div className="relative w-full h-16 flex justify-center">
            <div className="w-[2px] h-full bg-gradient-to-b from-white/5 to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
};