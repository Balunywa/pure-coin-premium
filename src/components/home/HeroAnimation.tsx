import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';

const Card3D = ({
  delay,
  children,
  className = '',
  depth = 0,
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
  depth?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [x, y]);

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
      style={{ perspective: 600 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{
          y: [0, -6 - depth * 2, 0],
          z: isHovered ? 20 : 0,
        }}
        transition={{
          y: { duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' },
          z: { duration: 0.3 },
        }}
        whileHover={{ scale: 1.08 }}
        className="cursor-pointer"
      >
        {children}
        {/* Hover glow ring */}
        <motion.div
          className="absolute -inset-[1px] rounded-xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.2), transparent 50%, rgba(255,255,255,0.1))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '1px',
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export const HeroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax transforms for different depth layers
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
  const midX = useSpring(useTransform(mouseX, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 30 });
  const midY = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 30 });

  const handleContainerMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mouseX, mouseY]);

  const handleContainerMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleContainerMouseMove}
      onMouseLeave={handleContainerMouseLeave}
      className="relative w-full max-w-[460px] aspect-square mx-auto"
      style={{ perspective: 1000 }}
    >
      {/* Ambient glow behind everything */}
      <motion.div
        className="absolute inset-[15%] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          x: bgX,
          y: bgY,
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Central phone mockup - deepest parallax layer */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        style={{ x: midX, y: midY }}
      >
        <Card3D delay={0.3} depth={0}>
          <div className="w-[150px] bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="w-14 h-1.5 bg-muted rounded-full mx-auto mb-2.5" />
            <div className="space-y-2 px-0.5">
              <div className="h-3 bg-muted rounded-full w-3/4" />
              <div className="h-2 bg-muted/50 rounded-full w-full" />
              <div className="h-2 bg-muted/50 rounded-full w-2/3" />
              <div className="flex gap-1.5 mt-3">
                <motion.div
                  className="h-11 flex-1 rounded-lg border border-blue-500/30 relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.3))' }}
                  animate={{ boxShadow: ['0 0 0px rgba(59,130,246,0)', '0 0 20px rgba(59,130,246,0.3)', '0 0 0px rgba(59,130,246,0)'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }} />
                </motion.div>
                <motion.div
                  className="h-11 flex-1 rounded-lg border border-emerald-500/30"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.3))' }}
                  animate={{ boxShadow: ['0 0 0px rgba(16,185,129,0)', '0 0 20px rgba(16,185,129,0.3)', '0 0 0px rgba(16,185,129,0)'] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
              <motion.div
                className="h-6 bg-muted/30 rounded-lg flex items-center justify-center gap-1.5"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }} />
                <span className="text-[7px] text-emerald-400/70 font-mono">LIVE</span>
              </motion.div>
            </div>
          </div>
        </Card3D>
      </motion.div>

      {/* Code editor - top right, parallax layer 2 */}
      <motion.div className="absolute right-[2%] top-[2%] z-20" style={{ x: bgX, y: bgY }}>
        <Card3D delay={0.6} depth={2}>
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-3 w-[150px] shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="w-2 h-2 rounded-full bg-red-400/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
              <div className="w-2 h-2 rounded-full bg-green-400/70" />
              <span className="text-[8px] text-muted-foreground/60 ml-auto font-mono">app.tsx</span>
            </div>
            <div className="space-y-1.5 font-mono text-[8px]">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <span className="text-violet-400">const </span>
                <span className="text-blue-300">pay</span>
                <span className="text-muted-foreground/60"> = </span>
                <span className="text-emerald-400">async</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.4 }}
              >
                <span className="text-muted-foreground/40">{'  '}</span>
                <span className="text-yellow-300">await </span>
                <span className="text-blue-300">transfer</span>
                <span className="text-muted-foreground/60">()</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.4 }}
              >
                <span className="text-muted-foreground/40">{'  '}</span>
                <span className="text-violet-400">return </span>
                <span className="text-emerald-300">success</span>
              </motion.div>
              {/* Typing cursor */}
              <motion.div
                className="w-[5px] h-3 bg-foreground/60 rounded-[1px] ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </div>
        </Card3D>
      </motion.div>

      {/* Design system - top left */}
      <motion.div className="absolute left-[2%] top-[5%] z-20" style={{ x: bgX, y: bgY }}>
        <Card3D delay={0.9} depth={3}>
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-3 w-[130px] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
            <div className="text-[8px] text-muted-foreground/60 uppercase tracking-widest mb-2">Design</div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { bg: 'bg-blue-500', glow: 'rgba(59,130,246,0.4)' },
                { bg: 'bg-violet-500', glow: 'rgba(139,92,246,0.4)' },
                { bg: 'bg-emerald-500', glow: 'rgba(16,185,129,0.4)' },
                { bg: 'bg-amber-500', glow: 'rgba(245,158,11,0.4)' },
                { bg: 'bg-rose-500', glow: 'rgba(244,63,94,0.4)' },
                { bg: 'bg-cyan-500', glow: 'rgba(6,182,212,0.4)' },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  className={`h-6 rounded-md ${c.bg}/40 cursor-pointer`}
                  whileHover={{
                    scale: 1.3,
                    boxShadow: `0 0 16px ${c.glow}`,
                    zIndex: 10,
                  }}
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
            <div className="mt-2.5 space-y-1">
              <motion.div className="h-1.5 bg-muted rounded-full"
                animate={{ width: ['60%', '100%', '60%'] }}
                transition={{ duration: 3, repeat: Infinity }} />
              <div className="h-1.5 bg-muted/50 rounded-full w-2/3" />
            </div>
          </div>
        </Card3D>
      </motion.div>

      {/* Performance - bottom right */}
      <motion.div className="absolute right-[2%] bottom-[5%] z-20" style={{ x: bgX, y: bgY }}>
        <Card3D delay={1.2} depth={1}>
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-3 w-[145px] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
            <div className="text-[8px] text-muted-foreground/60 uppercase tracking-widest mb-2">Performance</div>
            <div className="flex items-end gap-[3px] h-12">
              {[40, 65, 45, 80, 60, 90, 75, 95].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t cursor-pointer"
                  style={{
                    background: `linear-gradient(to top, rgba(16,185,129,0.2), rgba(16,185,129,0.5))`,
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  whileHover={{
                    scaleY: 1.2,
                    background: 'linear-gradient(to top, rgba(16,185,129,0.4), rgba(16,185,129,0.8))',
                    boxShadow: '0 0 12px rgba(16,185,129,0.4)',
                  }}
                  transition={{ duration: 0.8, delay: 1.5 + i * 0.08, ease: 'easeOut' }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <motion.span
                className="text-[10px] text-emerald-400 font-mono font-medium"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↑ 42%
              </motion.span>
              <span className="text-[8px] text-muted-foreground/40">7d</span>
            </div>
          </div>
        </Card3D>
      </motion.div>

      {/* Deployment - bottom left */}
      <motion.div className="absolute left-[2%] bottom-[8%] z-20" style={{ x: bgX, y: bgY }}>
        <Card3D delay={1.5} depth={2}>
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-3 w-[135px] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
            <div className="text-[8px] text-muted-foreground/60 uppercase tracking-widest mb-2">Deploy</div>
            <div className="space-y-2">
              {[
                { label: 'Build', done: true, color: 'emerald' },
                { label: 'Test', done: true, color: 'emerald' },
                { label: 'Deploy', done: false, color: 'blue' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 cursor-pointer rounded-md px-1 py-0.5 -mx-1"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.done ? (
                    <motion.div
                      className="w-3.5 h-3.5 rounded-full bg-emerald-500/30 border border-emerald-500/60 flex items-center justify-center"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 2 + i * 0.3, type: 'spring' }}
                    >
                      <motion.svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <motion.path
                          d="M2 4L3.5 5.5L6 2.5"
                          stroke="rgb(52,211,153)"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 2.3 + i * 0.3, duration: 0.4 }}
                        />
                      </motion.svg>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="w-3.5 h-3.5 rounded-full border border-blue-500/60 relative"
                      animate={{
                        boxShadow: ['0 0 0px rgba(59,130,246,0)', '0 0 10px rgba(59,130,246,0.4)', '0 0 0px rgba(59,130,246,0)'],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <motion.div
                        className="absolute inset-0.5 rounded-full bg-blue-500/40"
                        animate={{ scale: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                  )}
                  <span className="text-[9px] text-muted-foreground/70">{step.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Card3D>
      </motion.div>

      {/* === DATA FLOW NETWORK === */}
      <svg
        className="absolute inset-0 w-full h-full z-[5] pointer-events-none"
        viewBox="0 0 460 460"
        fill="none"
      >
        <defs>
          {/* Bright cyan-white gradient for lines */}
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6,182,212,0)" />
            <stop offset="50%" stopColor="rgba(6,182,212,0.6)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0)" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(139,92,246,0)" />
            <stop offset="50%" stopColor="rgba(139,92,246,0.5)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0)" />
          </linearGradient>
          {/* Glow filters */}
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Particle gradient */}
          <radialGradient id="particleGrad">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="rgba(6,182,212,1)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0)" />
          </radialGradient>
          <radialGradient id="particleGrad2">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="rgba(139,92,246,1)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0)" />
          </radialGradient>
        </defs>

        {/* Outer connection ring — visible persistent lines */}
        {[
          { d: 'M 110 90 Q 230 40 360 80', delay: 0.8 },
          { d: 'M 360 80 Q 400 230 360 380', delay: 1.0 },
          { d: 'M 360 380 Q 230 420 110 380', delay: 1.2 },
          { d: 'M 110 380 Q 60 230 110 90', delay: 1.4 },
        ].map((seg, i) => (
          <g key={`ring-${i}`}>
            {/* Base dim line */}
            <motion.path d={seg.d} stroke="rgba(6,182,212,0.12)" strokeWidth="1.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: seg.delay }} />
            {/* Bright animated overlay */}
            <motion.path d={seg.d} stroke="url(#lineGrad)" strokeWidth="2" filter="url(#softGlow)"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: seg.delay }} />
          </g>
        ))}

        {/* Spokes: center ↔ corners — dual layer */}
        {[
          { x1: 230, y1: 210, x2: 130, y2: 110, delay: 1.6 },
          { x1: 230, y1: 210, x2: 340, y2: 100, delay: 1.8 },
          { x1: 230, y1: 260, x2: 130, y2: 370, delay: 2.0 },
          { x1: 230, y1: 260, x2: 340, y2: 370, delay: 2.2 },
        ].map((l, i) => (
          <g key={`spoke-${i}`}>
            <motion.line {...l} stroke="rgba(139,92,246,0.1)" strokeWidth="1.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: l.delay }} />
            <motion.line {...l} stroke="url(#lineGrad2)" strokeWidth="1.5" filter="url(#softGlow)"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: l.delay }} />
          </g>
        ))}

        {/* Cross connections for mesh feel */}
        {[
          { x1: 130, y1: 110, x2: 340, y2: 370, delay: 2.4 },
          { x1: 340, y1: 100, x2: 130, y2: 370, delay: 2.6 },
        ].map((l, i) => (
          <g key={`cross-${i}`}>
            <motion.line {...l} stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 8"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: l.delay }} />
          </g>
        ))}

        {/* === FLOWING DATA PARTICLES === */}
        {/* Particles along outer ring */}
        {[
          { path: 'M 110 90 Q 230 40 360 80', dur: '2.5s', begin: '1.5s', color: 'cyan' },
          { path: 'M 360 80 Q 400 230 360 380', dur: '3s', begin: '2s', color: 'cyan' },
          { path: 'M 360 380 Q 230 420 110 380', dur: '2.5s', begin: '2.5s', color: 'cyan' },
          { path: 'M 110 380 Q 60 230 110 90', dur: '3s', begin: '3s', color: 'cyan' },
        ].map((p, i) => (
          <g key={`ring-particle-${i}`}>
            {/* Main particle */}
            <circle r="3" fill="url(#particleGrad)" filter="url(#nodeGlow)">
              <animateMotion dur={p.dur} repeatCount="indefinite" begin={p.begin} path={p.path} />
              <animate attributeName="opacity" values="0;0.9;0.9;0" dur={p.dur} repeatCount="indefinite" begin={p.begin} />
            </circle>
            {/* Trailing particle */}
            <circle r="2" fill="rgba(6,182,212,0.5)" filter="url(#softGlow)">
              <animateMotion dur={p.dur} repeatCount="indefinite" begin={`${parseFloat(p.begin) + 0.15}s`} path={p.path} />
              <animate attributeName="opacity" values="0;0.5;0.5;0" dur={p.dur} repeatCount="indefinite" begin={`${parseFloat(p.begin) + 0.15}s`} />
            </circle>
            {/* Second trailing */}
            <circle r="1.5" fill="rgba(6,182,212,0.3)">
              <animateMotion dur={p.dur} repeatCount="indefinite" begin={`${parseFloat(p.begin) + 0.3}s`} path={p.path} />
              <animate attributeName="opacity" values="0;0.3;0.3;0" dur={p.dur} repeatCount="indefinite" begin={`${parseFloat(p.begin) + 0.3}s`} />
            </circle>
          </g>
        ))}

        {/* Particles along spokes — bidirectional */}
        {[
          { path: 'M 230 210 L 130 110', dur: '2s', begin: '2s' },
          { path: 'M 130 110 L 230 210', dur: '2s', begin: '3s' },
          { path: 'M 230 210 L 340 100', dur: '2s', begin: '2.5s' },
          { path: 'M 340 100 L 230 210', dur: '2s', begin: '3.5s' },
          { path: 'M 230 260 L 130 370', dur: '2s', begin: '2.8s' },
          { path: 'M 130 370 L 230 260', dur: '2s', begin: '3.8s' },
          { path: 'M 230 260 L 340 370', dur: '2s', begin: '3.2s' },
          { path: 'M 340 370 L 230 260', dur: '2s', begin: '4.2s' },
        ].map((p, i) => (
          <g key={`spoke-particle-${i}`}>
            <circle r="2.5" fill="url(#particleGrad2)" filter="url(#nodeGlow)">
              <animateMotion dur={p.dur} repeatCount="indefinite" begin={p.begin} path={p.path} />
              <animate attributeName="opacity" values="0;0.8;0.8;0" dur={p.dur} repeatCount="indefinite" begin={p.begin} />
            </circle>
            <circle r="1.5" fill="rgba(139,92,246,0.4)">
              <animateMotion dur={p.dur} repeatCount="indefinite" begin={`${parseFloat(p.begin) + 0.1}s`} path={p.path} />
              <animate attributeName="opacity" values="0;0.4;0.4;0" dur={p.dur} repeatCount="indefinite" begin={`${parseFloat(p.begin) + 0.1}s`} />
            </circle>
          </g>
        ))}

        {/* Junction nodes — pulsing with rings */}
        {[
          { cx: 230, cy: 210, color: 'rgba(6,182,212,', size: 4 },
          { cx: 230, cy: 260, color: 'rgba(6,182,212,', size: 4 },
          { cx: 130, cy: 110, color: 'rgba(139,92,246,', size: 3 },
          { cx: 340, cy: 100, color: 'rgba(139,92,246,', size: 3 },
          { cx: 130, cy: 370, color: 'rgba(139,92,246,', size: 3 },
          { cx: 340, cy: 370, color: 'rgba(139,92,246,', size: 3 },
        ].map((node, i) => (
          <g key={`node-${i}`}>
            {/* Outer pulse ring */}
            <circle cx={node.cx} cy={node.cy} r={node.size * 3} fill="none" stroke={`${node.color}0.15)`} strokeWidth="1">
              <animate attributeName="r" values={`${node.size};${node.size * 4};${node.size}`} dur="3s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
            {/* Inner glow */}
            <circle cx={node.cx} cy={node.cy} r={node.size} fill={`${node.color}0.6)`} filter="url(#nodeGlow)">
              <animate attributeName="r" values={`${node.size * 0.7};${node.size};${node.size * 0.7}`} dur="2s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
            </circle>
            {/* Core dot */}
            <circle cx={node.cx} cy={node.cy} r="1.5" fill="white">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
            </circle>
          </g>
        ))}
      </svg>

      {/* Floating particles with 3D depth */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            background: `radial-gradient(circle, rgba(255,255,255,${0.2 + (i % 3) * 0.1}), transparent)`,
            left: `${10 + i * 8}%`,
            top: `${10 + (i % 4) * 22}%`,
          }}
          animate={{
            y: [0, -20 - i * 2, 0],
            x: [0, (i % 2 === 0 ? 5 : -5), 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
