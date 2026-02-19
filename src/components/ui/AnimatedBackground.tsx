import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface Circle {
  x: number;
  y: number;
  radius: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

interface Line {
  x1: number;
  y1: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  offset: number;
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0;
    const nodes: Node[] = [];
    const circles: Circle[] = [];
    const lines: Line[] = [];

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(1, 1);
      init();
    };

    const init = () => {
      nodes.length = 0;
      circles.length = 0;
      lines.length = 0;

      // Floating nodes
      const nodeCount = Math.floor((w * h) / 25000);
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2.5 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }

      // Orbiting circles
      for (let i = 0; i < 4; i++) {
        circles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 120 + 60,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.003,
          opacity: Math.random() * 0.15 + 0.05,
        });
      }

      // Diagonal streaming lines
      for (let i = 0; i < 12; i++) {
        lines.push({
          x1: Math.random() * w,
          y1: Math.random() * h,
          length: Math.random() * 300 + 100,
          angle: -Math.PI / 6 + (Math.random() - 0.5) * 0.3,
          speed: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.25 + 0.05,
          offset: Math.random() * 1000,
        });
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      // Draw circles (orbital rings)
      circles.forEach(c => {
        c.rotation += c.rotationSpeed;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(100, 160, 255, ${c.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node on circle
        const nx = c.x + Math.cos(c.rotation) * c.radius;
        const ny = c.y + Math.sin(c.rotation) * c.radius;
        ctx.beginPath();
        ctx.arc(nx, ny, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 200, 255, ${c.opacity * 3})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(nx, ny, 8, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(nx, ny, 0, nx, ny, 8);
        g.addColorStop(0, `rgba(100, 170, 255, ${c.opacity * 2})`);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fill();
      });

      // Draw streaming lines
      lines.forEach(l => {
        l.x1 += Math.cos(l.angle) * l.speed;
        l.y1 += Math.sin(l.angle) * l.speed;

        if (l.x1 > w + 200 || l.y1 > h + 200 || l.x1 < -200 || l.y1 < -200) {
          l.x1 = Math.random() * w;
          l.y1 = -50;
        }

        const x2 = l.x1 + Math.cos(l.angle) * l.length;
        const y2 = l.y1 + Math.sin(l.angle) * l.length;

        const grad = ctx.createLinearGradient(l.x1, l.y1, x2, y2);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.5, `rgba(80, 140, 255, ${l.opacity})`);
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.moveTo(l.x1, l.y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw nodes and connections
      const connectionDist = 150;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        const pulse = Math.sin(time * n.pulseSpeed + n.pulsePhase) * 0.3 + 0.7;
        const alpha = n.opacity * pulse;

        // Connections
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const lineAlpha = (1 - dist / connectionDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(100, 160, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Node dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 210, 255, ${alpha})`;
        ctx.fill();

        // Glow
        if (n.radius > 2) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 4, 0, Math.PI * 2);
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 4);
          glow.addColorStop(0, `rgba(80, 150, 255, ${alpha * 0.4})`);
          glow.addColorStop(1, 'transparent');
          ctx.fillStyle = glow;
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    animationRef.current = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />
      {/* Radial fade overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 30%, transparent 0%, hsl(0 0% 0% / 0.7) 100%)',
        }}
      />
      <div className="absolute inset-0 noise" />
    </div>
  );
};
