import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Wand2, Gem, CheckCircle2 } from 'lucide-react';

const storySteps = [
  {
    id: 'discovery',
    title: 'Discovery',
    description: 'Define the vision. Align on outcomes. Map the technical architecture.',
    icon: Star,
    color: '#8B5CF6', // Violet
    freq: 'Syncing...',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Craft the system. Refine every interaction. Build the foundation.',
    icon: Wand2,
    color: '#3B82F6', // Blue
    freq: 'Processing',
  },
  {
    id: 'delivery',
    title: 'Delivery',
    description: 'Ship with confidence. Monitor performance. Iterate with data.',
    icon: Gem,
    color: '#10B981', // Emerald
    freq: 'Uploaded',
  },
];

// --- 1. The Background Data Grid (The "Matrix" effect) ---
const ActiveGrid = ({ color }: { color: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15]">
      <svg className="absolute inset-0 w-full h-full" width="100%" height="100%">
        <defs>
          <pattern id={`grid-${color}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${color})`} />
      </svg>
      {/* Random Data Packets */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] w-12 bg-white/50"
          style={{ 
            top: `${20 + i * 30}%`, 
            left: '-10%', 
            boxShadow: `0 0 10px ${color}` 
          }}
          animate={{ left: ['-20%', '120%'] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5
          }}
        />
      ))}
    </div>
  );
};

// --- 2. The Holographic Process Card ---
const HoloCard = ({ step, index }: { step: typeof storySteps[0], index: number }) => {
  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="relative group z-10"
    >
      {/* Outer Glow */}
      <div 
        className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition duration-500"
        style={{ backgroundImage: `linear-gradient(to right, transparent, ${step.color}40, transparent)` }}
      />

      <div className="relative h-full bg-[#030303] border border-white/10 rounded-2xl overflow-hidden p-8">
        {/* Dynamic Background */}
        <ActiveGrid color={step.color} />
        
        {/* Scanner Light Sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
          animate={{ x: ['-150%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        />

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-white/20 transition-colors">
              <Icon className="w-6 h-6 text-white/90 relative z-10" />
              {/* Spinner */}
              <motion.div 
                className="absolute inset-0 border-2 border-transparent border-t-white/20 rounded-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest border border-white/5 px-2 py-1 rounded-full bg-black/50 backdrop-blur-md">
              0{index + 1} // {step.freq}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{step.title}</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- 3. The Connector Beams (Horizontal & Vertical) ---

const CenterSpine = () => {
  return (
    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block">
      {/* Static Line */}
      <div className="absolute inset-0 bg-white/5" />
      
      {/* Flowing Data "Magma" */}
      <motion.div
        className="absolute top-0 w-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.5)]"
        style={{ height: '200px' }}
        animate={{ top: ['-20%', '110%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

const HorizontalBeam = ({ isLeft, color, delay }: { isLeft: boolean, color: string, delay: number }) => {
  return (
    <div 
      className={`absolute top-1/2 -translate-y-1/2 hidden md:block h-[2px] w-12 lg:w-24 overflow-hidden
        ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}
      `}
    >
      <div className="absolute inset-0 bg-white/5" />
      {/* Shooting Particle */}
      <motion.div
        className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-70"
        style={{ 
            right: isLeft ? '100%' : 'auto', 
            left: isLeft ? 'auto' : '100%',
            boxShadow: `0 0 10px ${color}`
        }}
        animate={{ 
            right: isLeft ? ['100%', '-100%'] : 'auto',
            left: isLeft ? 'auto' : ['100%', '-100%']
        }}
        transition={{ duration: 2, repeat: Infinity, delay: delay, ease: "circOut" }}
      />
    </div>
  );
};

const CenterNode = ({ color, delay }: { color: string, delay: number }) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block z-20">
            <div className="w-4 h-4 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center">
                <motion.div 
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: color }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: delay }}
                />
            </div>
            {/* Ping Ring */}
            <motion.div
                className="absolute inset-0 rounded-full border border-white/30"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, delay: delay }}
            />
        </div>
    )
}

// --- Main Component ---

export const StorySection = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
        
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
         <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        
        {/* Header Stats - Keeping this simple but premium */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 border-b border-white/5 pb-12"
        >
             {[
                { label: 'Engineering Excellence', value: '12+', sub: 'Years' },
                { label: 'Products Shipped', value: '30+', sub: 'Global' },
                { label: 'Time to Market', value: '8wks', sub: 'Average' },
             ].map((stat, i) => (
                <div key={i} className="text-center group cursor-default">
                    <p className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{stat.value}</p>
                    <p className="text-sm text-white/40 uppercase tracking-widest">{stat.label}</p>
                </div>
             ))}
        </motion.div>

        {/* The Timeline Layout */}
        <div className="relative">
          <CenterSpine />

          <div className="space-y-24"> {/* Spacing between rows */}
            {storySteps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={step.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
                  
                  {/* Left Column */}
                  <div className={`relative ${isLeft ? 'md:pr-12 lg:pr-24' : 'md:order-2 md:pl-12 lg:pl-24'}`}>
                    <HoloCard step={step} index={index} />
                    
                    {/* The Connecting Beam (Only visible on desktop) */}
                    <HorizontalBeam isLeft={isLeft} color={step.color} delay={index * 0.2} />
                  </div>

                  {/* Right Column (Empty for spacing on alternating rows) */}
                  <div className={`${isLeft ? 'md:order-2' : 'md:order-1'}`} />

                  {/* Center Dot (Absolute position to ensure alignment) */}
                  <CenterNode color={step.color} delay={index * 0.2} />

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};