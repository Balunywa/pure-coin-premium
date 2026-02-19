import { motion } from 'framer-motion';

// Floating UI card representing a product screen
const AppScreen = ({ delay, x, y, children, rotate = 0 }: { delay: number; x: string; y: string; children: React.ReactNode; rotate?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
    className="absolute"
    style={{ left: x, top: y }}
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// Animated connection line
const ConnectionLine = ({ d, delay, color }: { d: string; delay: number; color: string }) => (
  <motion.path
    d={d}
    fill="none"
    stroke={`url(#line-gradient-${color})`}
    strokeWidth="1.5"
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.4 }}
    transition={{ duration: 1.5, delay, ease: 'easeInOut' }}
  />
);

// Data packet flowing along a path
const DataPacket = ({ delay, duration }: { delay: number; duration: number }) => (
  <motion.circle
    r="2"
    fill="white"
    filter="url(#glow)"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 1, 0] }}
    transition={{ duration: 0.5, delay }}
  >
    <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`}>
      <mpath href="#flow-path" />
    </animateMotion>
  </motion.circle>
);

export const HeroAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[500px] md:min-h-[600px]">
      {/* SVG Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="line-gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-gradient-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-gradient-violet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path id="flow-path" d="M 100 250 Q 250 150 400 250 Q 300 350 200 300" />
        </defs>

        {/* Connection lines between components */}
        <ConnectionLine d="M 150 180 Q 250 120 350 180" delay={0.8} color="blue" />
        <ConnectionLine d="M 350 180 Q 400 280 350 380" delay={1.0} color="emerald" />
        <ConnectionLine d="M 350 380 Q 250 420 150 380" delay={1.2} color="violet" />
        <ConnectionLine d="M 150 380 Q 100 280 150 180" delay={1.4} color="blue" />
        <ConnectionLine d="M 250 100 L 250 200" delay={0.6} color="emerald" />
        <ConnectionLine d="M 250 350 L 250 440" delay={1.6} color="violet" />

        {/* Animated data packets */}
        <DataPacket delay={2} duration={6} />
        <DataPacket delay={3.5} duration={6} />
        <DataPacket delay={5} duration={6} />

        {/* Pulsing nodes at intersections */}
        {[[250, 150], [350, 280], [250, 400], [150, 280]].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </svg>

      {/* Phone Mockup - Center piece */}
      <AppScreen delay={0.3} x="50%" y="25%" rotate={0}>
        <div className="relative -translate-x-1/2" style={{ width: '140px' }}>
          <div className="bg-[#0A0A0A] border border-white/15 rounded-2xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            {/* Phone notch */}
            <div className="w-16 h-1.5 bg-white/10 rounded-full mx-auto mb-2" />
            {/* App content */}
            <div className="space-y-2 px-1">
              <div className="h-3 bg-white/10 rounded-full w-3/4" />
              <div className="h-2 bg-white/5 rounded-full w-full" />
              <div className="h-2 bg-white/5 rounded-full w-2/3" />
              <div className="flex gap-1 mt-3">
                <motion.div
                  className="h-12 flex-1 bg-blue-500/20 border border-blue-500/30 rounded-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="h-12 flex-1 bg-emerald-500/20 border border-emerald-500/30 rounded-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
              </div>
              <motion.div
                className="h-6 bg-white/10 rounded-lg flex items-center justify-center"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </motion.div>
            </div>
          </div>
        </div>
      </AppScreen>

      {/* Code Editor Card - Top Right */}
      <AppScreen delay={0.6} x="72%" y="8%" rotate={6}>
        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-3 w-[160px] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
            <span className="text-[8px] text-white/30 ml-auto font-mono">app.tsx</span>
          </div>
          <div className="space-y-1 font-mono text-[7px]">
            <div className="flex gap-1">
              <span className="text-violet-400">const</span>
              <span className="text-blue-300">pay</span>
              <span className="text-white/40">=</span>
              <span className="text-emerald-400">async</span>
            </div>
            <motion.div
              className="flex gap-1"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              <span className="text-white/20">{'  '}</span>
              <span className="text-yellow-300">await</span>
              <span className="text-blue-300">transfer</span>
              <span className="text-white/40">()</span>
            </motion.div>
            <div className="flex gap-1">
              <span className="text-white/20">{'  '}</span>
              <span className="text-violet-400">return</span>
              <span className="text-emerald-300">success</span>
            </div>
          </div>
        </div>
      </AppScreen>

      {/* Design Card - Top Left */}
      <AppScreen delay={0.9} x="8%" y="12%" rotate={-4}>
        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-3 w-[130px] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
          <div className="text-[8px] text-white/30 uppercase tracking-widest mb-2">Design System</div>
          <div className="grid grid-cols-3 gap-1">
            {['bg-blue-500/40', 'bg-violet-500/40', 'bg-emerald-500/40', 'bg-amber-500/40', 'bg-rose-500/40', 'bg-cyan-500/40'].map((color, i) => (
              <motion.div
                key={i}
                className={`h-5 rounded ${color}`}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
          <div className="mt-2 space-y-1">
            <div className="h-1.5 bg-white/10 rounded-full w-full" />
            <div className="h-1.5 bg-white/10 rounded-full w-2/3" />
          </div>
        </div>
      </AppScreen>

      {/* Metrics Card - Bottom Right */}
      <AppScreen delay={1.2} x="68%" y="62%" rotate={3}>
        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-3 w-[150px] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
          <div className="text-[8px] text-white/30 uppercase tracking-widest mb-2">Performance</div>
          <div className="flex items-end gap-1 h-10">
            {[40, 65, 45, 80, 60, 90, 75, 95].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-emerald-500/30 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 1.5 + i * 0.1, ease: 'easeOut' }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[9px] text-emerald-400 font-mono">↑ 42%</span>
            <span className="text-[8px] text-white/20">7d</span>
          </div>
        </div>
      </AppScreen>

      {/* Deploy Status - Bottom Left */}
      <AppScreen delay={1.5} x="5%" y="65%" rotate={-2}>
        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-3 w-[140px] shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
          <div className="text-[8px] text-white/30 uppercase tracking-widest mb-2">Deployment</div>
          <div className="space-y-2">
            {[
              { label: 'Build', status: 'done' },
              { label: 'Test', status: 'done' },
              { label: 'Deploy', status: 'active' },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                {step.status === 'done' ? (
                  <motion.div
                    className="w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-500/60 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2 + i * 0.3 }}
                  >
                    <div className="w-1 h-1 bg-emerald-400 rounded-full" />
                  </motion.div>
                ) : (
                  <motion.div
                    className="w-3 h-3 rounded-full border border-blue-500/60"
                    animate={{ borderColor: ['rgba(59,130,246,0.3)', 'rgba(59,130,246,0.8)', 'rgba(59,130,246,0.3)'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <motion.div
                      className="w-full h-full rounded-full bg-blue-500/30"
                      animate={{ scale: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>
                )}
                <span className="text-[9px] text-white/50">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </AppScreen>

      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
