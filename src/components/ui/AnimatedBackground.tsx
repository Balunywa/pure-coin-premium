import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora mesh */}
      <div className="absolute inset-0 bg-aurora opacity-40 animate-aurora" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Dot texture */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      {/* Radial gradient from top */}
      <div className="absolute inset-0 radial-overlay" />
      
      {/* Animated gradient orbs - monochrome */}
      <motion.div
        className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(0 0% 100% / 0.05) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(0 0% 90% / 0.04) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{
          duration: 14,
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
