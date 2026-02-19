import { useEffect, useRef } from 'react';

/**
 * Network topology background — engineered connections, not bouncing particles.
 * Static node positions with animated signal pulses traveling along edges.
 * Inspired by circuit board / network architecture visualizations.
 */

interface Node {
  x: number;
  y: number;
  size: number;
  connections: number[];
  glow: number;
}

interface Signal {
  from: number;
  to: number;
  progress: number;
  speed: number;
  alpha: number;
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0;
    let nodes: Node[] = [];
    let signals: Signal[] = [];
    const dpr = Math.min(window.devicePixelRatio, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width * dpr;
      h = rect.height * dpr;
      canvas.width = w;
      canvas.height = h;
      build();
    };

    const build = () => {
      nodes = [];
      signals = [];

      // Place nodes on a deliberate grid with jitter — like infrastructure topology
      const cols = Math.ceil(w / 140);
      const rows = Math.ceil(h / 140);
      const spacingX = w / cols;
      const spacingY = h / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Skip ~40% for organic feel
          if (Math.random() < 0.4) continue;
          nodes.push({
            x: spacingX * (c + 0.5) + (Math.random() - 0.5) * spacingX * 0.5,
            y: spacingY * (r + 0.5) + (Math.random() - 0.5) * spacingY * 0.5,
            size: 1.2 + Math.random() * 1.3,
            connections: [],
            glow: Math.random(),
          });
        }
      }

      // Build connections — each node connects to 1-3 nearest neighbors
      const maxDist = Math.max(spacingX, spacingY) * 2.2;
      for (let i = 0; i < nodes.length; i++) {
        const distances: { idx: number; dist: number }[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            distances.push({ idx: j, dist });
          }
        }
        distances.sort((a, b) => a.dist - b.dist);
        const connectCount = Math.min(1 + Math.floor(Math.random() * 3), distances.length);
        for (let k = 0; k < connectCount; k++) {
          const target = distances[k].idx;
          if (!nodes[i].connections.includes(target)) {
            nodes[i].connections.push(target);
          }
        }
      }
    };

    const spawnSignal = () => {
      if (nodes.length === 0) return;
      const fromIdx = Math.floor(Math.random() * nodes.length);
      const node = nodes[fromIdx];
      if (node.connections.length === 0) return;
      const toIdx = node.connections[Math.floor(Math.random() * node.connections.length)];
      signals.push({
        from: fromIdx,
        to: toIdx,
        progress: 0,
        speed: 0.003 + Math.random() * 0.006,
        alpha: 0.6 + Math.random() * 0.4,
      });
    };

    let lastSpawn = 0;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      // Spawn signals at intervals
      if (time - lastSpawn > 120) {
        spawnSignal();
        spawnSignal();
        lastSpawn = time;
      }

      // Draw edges — static, very subtle
      ctx.lineWidth = 0.5;
      const drawn = new Set<string>();
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        for (const j of n.connections) {
          const key = `${Math.min(i, j)}-${Math.max(i, j)}`;
          if (drawn.has(key)) continue;
          drawn.add(key);
          const m = nodes[j];
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
          ctx.stroke();
        }
      }

      // Draw signals traveling along edges
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;

        if (sig.progress >= 1) {
          // Chain: signal arrives, may continue
          const arrivedNode = nodes[sig.to];
          if (arrivedNode.connections.length > 0 && Math.random() < 0.5) {
            const next = arrivedNode.connections[Math.floor(Math.random() * arrivedNode.connections.length)];
            signals.push({
              from: sig.to,
              to: next,
              progress: 0,
              speed: sig.speed,
              alpha: sig.alpha * 0.8,
            });
          }
          signals.splice(s, 1);
          continue;
        }

        const from = nodes[sig.from];
        const to = nodes[sig.to];
        const x = from.x + (to.x - from.x) * sig.progress;
        const y = from.y + (to.y - from.y) * sig.progress;

        // Signal trail — lit edge segment
        const trailLen = 0.15;
        const trailStart = Math.max(0, sig.progress - trailLen);
        const tx1 = from.x + (to.x - from.x) * trailStart;
        const ty1 = from.y + (to.y - from.y) * trailStart;

        const grad = ctx.createLinearGradient(tx1, ty1, x, y);
        grad.addColorStop(0, `rgba(120, 180, 255, 0)`);
        grad.addColorStop(1, `rgba(120, 180, 255, ${sig.alpha * 0.3})`);
        ctx.beginPath();
        ctx.moveTo(tx1, ty1);
        ctx.lineTo(x, y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Signal head
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 210, 255, ${sig.alpha * 0.8})`;
        ctx.fill();

        // Glow
        const g = ctx.createRadialGradient(x, y, 0, x, y, 12);
        g.addColorStop(0, `rgba(100, 170, 255, ${sig.alpha * 0.25})`);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw nodes — static dots with subtle pulse
      for (const n of nodes) {
        const pulse = 0.3 + Math.sin(time * 0.001 + n.glow * 10) * 0.1;

        // Outer glow ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * 3, 0, Math.PI * 2);
        const ng = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.size * 3);
        ng.addColorStop(0, `rgba(150, 200, 255, ${pulse * 0.15})`);
        ng.addColorStop(1, 'transparent');
        ctx.fillStyle = ng;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${pulse})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    animRef.current = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 noise" />
    </div>
  );
};
