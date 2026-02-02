import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Radial gradient from top */}
      <div className="absolute inset-0 radial-overlay" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(250 89% 65% / 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(280 87% 60% / 0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 noise" />
    </div>
  );
};
