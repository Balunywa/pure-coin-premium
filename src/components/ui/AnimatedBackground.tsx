import { useEffect, useRef } from 'react';

/**
 * Dynamic network topology background with mouse reactivity,
 * layered depth, and intensified signal propagation.
 */

interface Node {
  x: number;
  y: number;
  size: number;
  connections: number[];
  glow: number;
  layer: number; // depth layer for parallax
}

interface Signal {
  from: number;
  to: number;
  progress: number;
  speed: number;
  alpha: number;
  hue: number;
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0;
    let nodes: Node[] = [];
    let signals: Signal[] = [];
    const dpr = Math.min(window.devicePixelRatio, 2);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) * dpr,
        y: (e.clientY - rect.top) * dpr,
      };
    };

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

      const cols = Math.ceil(w / 120);
      const rows = Math.ceil(h / 120);
      const spacingX = w / cols;
      const spacingY = h / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() < 0.35) continue;
          nodes.push({
            x: spacingX * (c + 0.5) + (Math.random() - 0.5) * spacingX * 0.6,
            y: spacingY * (r + 0.5) + (Math.random() - 0.5) * spacingY * 0.6,
            size: 1.0 + Math.random() * 1.8,
            connections: [],
            glow: Math.random(),
            layer: Math.random() < 0.3 ? 0 : Math.random() < 0.6 ? 1 : 2,
          });
        }
      }

      // Connect nodes within proximity
      const maxDist = Math.max(spacingX, spacingY) * 2.5;
      for (let i = 0; i < nodes.length; i++) {
        const distances: { idx: number; dist: number }[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) distances.push({ idx: j, dist });
        }
        distances.sort((a, b) => a.dist - b.dist);
        const count = Math.min(1 + Math.floor(Math.random() * 3), distances.length);
        for (let k = 0; k < count; k++) {
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
      const hues = [200, 220, 240, 260, 180]; // blue-cyan-purple spectrum
      signals.push({
        from: fromIdx,
        to: toIdx,
        progress: 0,
        speed: 0.004 + Math.random() * 0.008,
        alpha: 0.7 + Math.random() * 0.3,
        hue: hues[Math.floor(Math.random() * hues.length)],
      });
    };

    let lastSpawn = 0;
    const MOUSE_RADIUS = 200 * dpr;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Spawn more signals for dynamism
      if (time - lastSpawn > 80) {
        spawnSignal();
        spawnSignal();
        spawnSignal();
        lastSpawn = time;
      }

      // Draw edges with mouse-reactive brightness
      const drawn = new Set<string>();
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        for (const j of n.connections) {
          const key = `${Math.min(i, j)}-${Math.max(i, j)}`;
          if (drawn.has(key)) continue;
          drawn.add(key);
          const m = nodes[j];

          // Mouse proximity brightening
          const midX = (n.x + m.x) / 2;
          const midY = (n.y + m.y) / 2;
          const distToMouse = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2);
          const mouseInfluence = Math.max(0, 1 - distToMouse / MOUSE_RADIUS);
          const baseAlpha = 0.04 + mouseInfluence * 0.12;

          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = `rgba(150, 200, 255, ${baseAlpha})`;
          ctx.lineWidth = 0.5 + mouseInfluence * 1;
          ctx.stroke();
        }
      }

      // Draw signals
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;

        if (sig.progress >= 1) {
          const arrivedNode = nodes[sig.to];
          if (arrivedNode.connections.length > 0 && Math.random() < 0.6) {
            const next = arrivedNode.connections[Math.floor(Math.random() * arrivedNode.connections.length)];
            signals.push({
              from: sig.to,
              to: next,
              progress: 0,
              speed: sig.speed,
              alpha: sig.alpha * 0.85,
              hue: sig.hue + (Math.random() - 0.5) * 20,
            });
          }
          signals.splice(s, 1);
          continue;
        }

        const from = nodes[sig.from];
        const to = nodes[sig.to];
        const x = from.x + (to.x - from.x) * sig.progress;
        const y = from.y + (to.y - from.y) * sig.progress;

        // Trail
        const trailLen = 0.2;
        const trailStart = Math.max(0, sig.progress - trailLen);
        const tx1 = from.x + (to.x - from.x) * trailStart;
        const ty1 = from.y + (to.y - from.y) * trailStart;

        const grad = ctx.createLinearGradient(tx1, ty1, x, y);
        grad.addColorStop(0, `hsla(${sig.hue}, 80%, 70%, 0)`);
        grad.addColorStop(1, `hsla(${sig.hue}, 80%, 70%, ${sig.alpha * 0.4})`);
        ctx.beginPath();
        ctx.moveTo(tx1, ty1);
        ctx.lineTo(x, y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Signal head
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${sig.hue}, 80%, 80%, ${sig.alpha * 0.9})`;
        ctx.fill();

        // Glow
        const g = ctx.createRadialGradient(x, y, 0, x, y, 16);
        g.addColorStop(0, `hsla(${sig.hue}, 80%, 70%, ${sig.alpha * 0.3})`);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fill();
      }

      // Cap signal count
      if (signals.length > 80) signals.splice(0, signals.length - 80);

      // Draw nodes with mouse reactivity and breathing
      for (const n of nodes) {
        const distToMouse = Math.sqrt((n.x - mx) ** 2 + (n.y - my) ** 2);
        const mouseBoost = Math.max(0, 1 - distToMouse / MOUSE_RADIUS);
        const pulse = 0.3 + Math.sin(time * 0.0015 + n.glow * 10) * 0.15 + mouseBoost * 0.5;
        const nodeSize = n.size * (1 + mouseBoost * 0.8);

        // Outer glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, nodeSize * 4, 0, Math.PI * 2);
        const ng = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, nodeSize * 4);
        ng.addColorStop(0, `hsla(210, 80%, 75%, ${pulse * 0.2})`);
        ng.addColorStop(1, 'transparent');
        ctx.fillStyle = ng;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, nodeSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(210, 60%, 85%, ${pulse})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    animRef.current = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'auto' }} />
      <div className="absolute inset-0 noise" />
    </div>
  );
};
