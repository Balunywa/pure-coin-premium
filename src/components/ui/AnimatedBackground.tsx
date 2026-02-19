import { useEffect, useRef } from 'react';

/**
 * Premium ambient background inspired by Apple's spatial computing visuals.
 * Uses layered, organic light meshes with extremely subtle movement.
 * No gimmicks — just depth, light, and atmosphere.
 */

interface LightOrb {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  hue: number;
  saturation: number;
  lightness: number;
  alpha: number;
  speed: number;
  drift: number;
  phase: number;
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const orbsRef = useRef<LightOrb[]>([]);
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width * dpr;
      h = rect.height * dpr;
      canvas.width = w;
      canvas.height = h;
      initOrbs();
    };

    const initOrbs = () => {
      // 5-7 large, soft light orbs — like Apple's ambient mesh gradients
      const count = 6;
      orbsRef.current = [];
      
      const palette = [
        { h: 220, s: 30, l: 12 },  // deep navy
        { h: 240, s: 20, l: 8 },   // dark indigo
        { h: 200, s: 15, l: 10 },  // steel blue
        { h: 260, s: 12, l: 7 },   // deep purple hint
        { h: 210, s: 25, l: 14 },  // muted blue
        { h: 190, s: 10, l: 6 },   // near-black teal
      ];

      for (let i = 0; i < count; i++) {
        const color = palette[i % palette.length];
        const orb: LightOrb = {
          x: Math.random() * w,
          y: Math.random() * h,
          targetX: Math.random() * w,
          targetY: Math.random() * h,
          radius: Math.max(w, h) * (0.25 + Math.random() * 0.35),
          hue: color.h,
          saturation: color.s,
          lightness: color.l,
          alpha: 0.4 + Math.random() * 0.3,
          speed: 0.0003 + Math.random() * 0.0004,
          drift: 0.00015 + Math.random() * 0.0002,
          phase: Math.random() * Math.PI * 2,
        };
        orbsRef.current.push(orb);
      }
    };

    const easeTarget = (current: number, target: number, factor: number) => {
      return current + (target - current) * factor;
    };

    const draw = (time: number) => {
      // Soft clear — full black base
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'hsl(0 0% 0%)';
      ctx.fillRect(0, 0, w, h);

      // Use screen blending for light accumulation
      ctx.globalCompositeOperation = 'screen';

      orbsRef.current.forEach((orb) => {
        // Ultra-slow organic drift
        const t = time * orb.speed;
        orb.targetX = (w * 0.5) + Math.sin(t + orb.phase) * w * 0.35;
        orb.targetY = (h * 0.5) + Math.cos(t * 0.7 + orb.phase) * h * 0.3;

        orb.x = easeTarget(orb.x, orb.targetX, 0.003);
        orb.y = easeTarget(orb.y, orb.targetY, 0.003);

        // Breathing alpha
        const breathe = Math.sin(time * orb.drift + orb.phase) * 0.08;
        const currentAlpha = Math.max(0.05, orb.alpha + breathe);

        // Radial gradient orb
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        );

        const baseColor = `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness}%`;

        gradient.addColorStop(0, `${baseColor}, ${currentAlpha})`);
        gradient.addColorStop(0.4, `${baseColor}, ${currentAlpha * 0.5})`);
        gradient.addColorStop(0.7, `${baseColor}, ${currentAlpha * 0.15})`);
        gradient.addColorStop(1, `${baseColor}, 0)`);

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Add an extremely subtle top-center light wash — like a distant light source
      ctx.globalCompositeOperation = 'screen';
      const topLight = ctx.createRadialGradient(
        w * 0.5, h * -0.1, 0,
        w * 0.5, h * -0.1, h * 0.8
      );
      topLight.addColorStop(0, 'hsla(220, 20%, 18%, 0.25)');
      topLight.addColorStop(0.5, 'hsla(220, 15%, 10%, 0.08)');
      topLight.addColorStop(1, 'transparent');
      ctx.fillStyle = topLight;
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = 'source-over';

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    animRef.current = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [dpr]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};
