import { motion } from 'framer-motion';

const FloatCard = ({ delay, children, y = 0 }: { delay: number; children: React.ReactNode; y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
  >
    <motion.div
      animate={{ y: [0, y - 8, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  </motion.div>
);

export const HeroAnimation = () => {
  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto">
      {/* Central phone mockup */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <FloatCard delay={0.3}>
          <div className="w-[140px] bg-[#0A0A0A] border border-white/15 rounded-2xl p-2.5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="w-14 h-1.5 bg-white/10 rounded-full mx-auto mb-2" />
            <div className="space-y-2 px-0.5">
              <div className="h-3 bg-white/10 rounded-full w-3/4" />
              <div className="h-2 bg-white/5 rounded-full w-full" />
              <div className="h-2 bg-white/5 rounded-full w-2/3" />
              <div className="flex gap-1 mt-3">
                <motion.div className="h-10 flex-1 bg-blue-500/20 border border-blue-500/30 rounded-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
                <motion.div className="h-10 flex-1 bg-emerald-500/20 border border-emerald-500/30 rounded-lg"
                  animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
              </div>
              <motion.div className="h-5 bg-white/8 rounded-lg flex items-center justify-center"
                animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </motion.div>
            </div>
          </div>
        </FloatCard>
      </div>

      {/* Code editor - top right */}
      <div className="absolute right-[2%] top-[2%] z-20">
        <FloatCard delay={0.6} y={-6}>
          <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-3 w-[145px] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-400/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
              <div className="w-2 h-2 rounded-full bg-green-400/60" />
              <span className="text-[8px] text-white/30 ml-auto font-mono">app.tsx</span>
            </div>
            <div className="space-y-1.5 font-mono text-[8px]">
              <div><span className="text-violet-400">const </span><span className="text-blue-300">pay</span><span className="text-white/40"> = </span><span className="text-emerald-400">async</span></div>
              <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>
                <span className="text-white/20">{'  '}</span><span className="text-yellow-300">await </span><span className="text-blue-300">transfer</span><span className="text-white/40">()</span>
              </motion.div>
              <div><span className="text-white/20">{'  '}</span><span className="text-violet-400">return </span><span className="text-emerald-300">success</span></div>
            </div>
          </div>
        </FloatCard>
      </div>

      {/* Design system - top left */}
      <div className="absolute left-[2%] top-[5%] z-20">
        <FloatCard delay={0.9} y={-10}>
          <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-3 w-[125px] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
            <div className="text-[8px] text-white/30 uppercase tracking-widest mb-2">Design System</div>
            <div className="grid grid-cols-3 gap-1">
              {['bg-blue-500/40', 'bg-violet-500/40', 'bg-emerald-500/40', 'bg-amber-500/40', 'bg-rose-500/40', 'bg-cyan-500/40'].map((color, i) => (
                <motion.div key={i} className={`h-5 rounded ${color}`}
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} />
              ))}
            </div>
            <div className="mt-2 space-y-1">
              <div className="h-1.5 bg-white/10 rounded-full w-full" />
              <div className="h-1.5 bg-white/10 rounded-full w-2/3" />
            </div>
          </div>
        </FloatCard>
      </div>

      {/* Performance - bottom right */}
      <div className="absolute right-[2%] bottom-[5%] z-20">
        <FloatCard delay={1.2} y={-5}>
          <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-3 w-[140px] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
            <div className="text-[8px] text-white/30 uppercase tracking-widest mb-2">Performance</div>
            <div className="flex items-end gap-[3px] h-10">
              {[40, 65, 45, 80, 60, 90, 75, 95].map((h, i) => (
                <motion.div key={i} className="flex-1 bg-emerald-500/30 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 1.5 + i * 0.1, ease: 'easeOut' }} />
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[9px] text-emerald-400 font-mono">↑ 42%</span>
              <span className="text-[8px] text-white/20">7d</span>
            </div>
          </div>
        </FloatCard>
      </div>

      {/* Deployment - bottom left */}
      <div className="absolute left-[2%] bottom-[8%] z-20">
        <FloatCard delay={1.5} y={-7}>
          <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-3 w-[130px] shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
            <div className="text-[8px] text-white/30 uppercase tracking-widest mb-2">Deployment</div>
            <div className="space-y-2">
              {[
                { label: 'Build', done: true },
                { label: 'Test', done: true },
                { label: 'Deploy', done: false },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  {step.done ? (
                    <motion.div className="w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-500/60 flex items-center justify-center"
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 + i * 0.3 }}>
                      <div className="w-1 h-1 bg-emerald-400 rounded-full" />
                    </motion.div>
                  ) : (
                    <motion.div className="w-3 h-3 rounded-full border border-blue-500/60"
                      animate={{ borderColor: ['rgba(59,130,246,0.3)', 'rgba(59,130,246,0.8)', 'rgba(59,130,246,0.3)'] }}
                      transition={{ duration: 1.5, repeat: Infinity }}>
                      <motion.div className="w-full h-full rounded-full bg-blue-500/30"
                        animate={{ scale: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
                    </motion.div>
                  )}
                  <span className="text-[9px] text-white/50">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FloatCard>
      </div>

      {/* Connection lines via SVG */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 420 420" fill="none">
        <defs>
          <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.12" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path d="M 100 80 Q 210 40 330 70" stroke="url(#lg1)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1 }} />
        <motion.path d="M 330 70 Q 370 210 330 350" stroke="url(#lg1)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.2 }} />
        <motion.path d="M 330 350 Q 210 390 100 350" stroke="url(#lg1)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.4 }} />
        <motion.path d="M 100 350 Q 50 210 100 80" stroke="url(#lg1)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.6 }} />
        {/* Lines to center */}
        <motion.line x1="210" y1="170" x2="120" y2="100" stroke="url(#lg1)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.8 }} />
        <motion.line x1="210" y1="170" x2="320" y2="90" stroke="url(#lg1)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 2 }} />
        <motion.line x1="210" y1="260" x2="120" y2="340" stroke="url(#lg1)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 2.2 }} />
        <motion.line x1="210" y1="260" x2="320" y2="340" stroke="url(#lg1)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 2.4 }} />
        
        {/* Pulsing nodes */}
        {[[210, 170], [210, 260], [120, 100], [320, 90], [120, 340], [320, 340]].map(([cx, cy], i) => (
          <motion.circle key={i} cx={cx} cy={cy} r="2.5" fill="white"
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 2, delay: 2 + i * 0.2, repeat: Infinity }} />
        ))}
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div key={i}
          className="absolute w-1 h-1 rounded-full bg-white/15"
          style={{ left: `${20 + i * 12}%`, top: `${15 + (i % 3) * 25}%` }}
          animate={{ y: [0, -15, 0], opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};
