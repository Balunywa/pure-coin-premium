import { useEffect, useRef } from 'react';

/**
 * Constellation network background with software-contextual elements.
 * Connected lines with code glyphs at nodes and data flowing along edges.
 */

interface Node {
  x: number;
  y: number;
  size: number;
  connections: number[];
  glow: number;
  label: string; // software glyph
  labelAlpha: number;
}

interface DataPacket {
  from: number;
  to: number;
  progress: number;
  speed: number;
  alpha: number;
}

const SOFTWARE_GLYPHS = ['{...}', '</>', '( )', '[ ]', '0x', '#', 'fn', '=>',  '/**/', '::',  'async', 'api', 'db', 'auth'];

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
    let packets: DataPacket[] = [];
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
      packets = [];

      // Create a sparser constellation grid
      const cols = Math.ceil(w / 180);
      const rows = Math.ceil(h / 180);
      const spacingX = w / cols;
      const spacingY = h / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() < 0.3) continue;
          nodes.push({
            x: spacingX * (c + 0.5) + (Math.random() - 0.5) * spacingX * 0.5,
            y: spacingY * (r + 0.5) + (Math.random() - 0.5) * spacingY * 0.5,
            size: 1.5 + Math.random() * 1.5,
            connections: [],
            glow: Math.random() * Math.PI * 2,
            label: SOFTWARE_GLYPHS[Math.floor(Math.random() * SOFTWARE_GLYPHS.length)],
            labelAlpha: 0,
          });
        }
      }

      // Triangulate connections — connect nearby nodes to form constellation lines
      const maxDist = Math.max(spacingX, spacingY) * 2.2;
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
        const count = Math.min(2 + Math.floor(Math.random() * 2), distances.length);
        for (let k = 0; k < count; k++) {
          const target = distances[k].idx;
          if (!nodes[i].connections.includes(target)) {
            nodes[i].connections.push(target);
          }
        }
      }
    };

    const spawnPacket = () => {
      if (nodes.length === 0) return;
      const fromIdx = Math.floor(Math.random() * nodes.length);
      const node = nodes[fromIdx];
      if (node.connections.length === 0) return;
      const toIdx = node.connections[Math.floor(Math.random() * node.connections.length)];
      packets.push({
        from: fromIdx,
        to: toIdx,
        progress: 0,
        speed: 0.003 + Math.random() * 0.005,
        alpha: 0.6 + Math.random() * 0.4,
      });
    };

    let lastSpawn = 0;
    const MOUSE_RADIUS = 220 * dpr;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Spawn data packets periodically
      if (time - lastSpawn > 200) {
        spawnPacket();
        spawnPacket();
        lastSpawn = time;
      }

      // --- Draw constellation lines (persistent connections) ---
      const drawn = new Set<string>();
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        for (const j of n.connections) {
          const key = `${Math.min(i, j)}-${Math.max(i, j)}`;
          if (drawn.has(key)) continue;
          drawn.add(key);
          const m = nodes[j];

          // Mouse proximity effect on lines
          const midX = (n.x + m.x) / 2;
          const midY = (n.y + m.y) / 2;
          const distToMouse = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2);
          const mouseInfluence = Math.max(0, 1 - distToMouse / MOUSE_RADIUS);

          const baseAlpha = 0.06 + mouseInfluence * 0.15;
          const lineWidth = 0.5 + mouseInfluence * 0.8;

          // Gradient along the line for depth
          const grad = ctx.createLinearGradient(n.x, n.y, m.x, m.y);
          grad.addColorStop(0, `hsla(160, 60%, 60%, ${baseAlpha})`);
          grad.addColorStop(0.5, `hsla(160, 50%, 50%, ${baseAlpha * 0.7})`);
          grad.addColorStop(1, `hsla(160, 60%, 60%, ${baseAlpha})`);

          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        }
      }

      // --- Draw data packets flowing along lines ---
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          // Chain to next node
          const arrivedNode = nodes[pkt.to];
          if (arrivedNode.connections.length > 0 && Math.random() < 0.4) {
            const next = arrivedNode.connections[Math.floor(Math.random() * arrivedNode.connections.length)];
            packets.push({
              from: pkt.to,
              to: next,
              progress: 0,
              speed: pkt.speed,
              alpha: pkt.alpha * 0.8,
            });
          }
          packets.splice(p, 1);
          continue;
        }

        const from = nodes[pkt.from];
        const to = nodes[pkt.to];
        const x = from.x + (to.x - from.x) * pkt.progress;
        const y = from.y + (to.y - from.y) * pkt.progress;

        // Small glowing packet (not a dot — a short dash along the line direction)
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const nx = (dx / len) * 6;
        const ny = (dy / len) * 6;

        ctx.beginPath();
        ctx.moveTo(x - nx, y - ny);
        ctx.lineTo(x + nx, y + ny);
        ctx.strokeStyle = `hsla(160, 70%, 65%, ${pkt.alpha * 0.8})`;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Subtle glow around packet
        const g = ctx.createRadialGradient(x, y, 0, x, y, 12);
        g.addColorStop(0, `hsla(160, 70%, 60%, ${pkt.alpha * 0.2})`);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();
      }

      // Cap packets
      if (packets.length > 40) packets.splice(0, packets.length - 40);

      // --- Draw nodes with glyphs ---
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (const n of nodes) {
        const distToMouse = Math.sqrt((n.x - mx) ** 2 + (n.y - my) ** 2);
        const mouseBoost = Math.max(0, 1 - distToMouse / MOUSE_RADIUS);
        const pulse = 0.4 + Math.sin(time * 0.001 + n.glow) * 0.15 + mouseBoost * 0.4;
        const nodeSize = n.size * (1 + mouseBoost * 0.5);

        // Outer glow
        const ng = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, nodeSize * 5);
        ng.addColorStop(0, `hsla(160, 60%, 60%, ${pulse * 0.15})`);
        ng.addColorStop(1, 'transparent');
        ctx.fillStyle = ng;
        ctx.beginPath();
        ctx.arc(n.x, n.y, nodeSize * 5, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, nodeSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(160, 55%, 65%, ${pulse})`;
        ctx.fill();

        // Software glyph label — only show when mouse is near
        const targetAlpha = mouseBoost > 0.3 ? mouseBoost * 0.7 : 0;
        n.labelAlpha += (targetAlpha - n.labelAlpha) * 0.08;

        if (n.labelAlpha > 0.02) {
          ctx.font = `${10 * dpr}px "SF Mono", "Monaco", "Inconsolata", monospace`;
          ctx.fillStyle = `hsla(160, 40%, 70%, ${n.labelAlpha})`;
          ctx.fillText(n.label, n.x, n.y - nodeSize * 4 - 6);
        }
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
