import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, ContactShadows } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

// Mouse-tracking camera rig
const CameraRig = () => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useFrame(() => {
    // Smooth lerp toward mouse
    target.current.x += (mouse.current.x - target.current.x) * 0.05;
    target.current.y += (mouse.current.y - target.current.y) * 0.05;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, target.current.x * 0.8, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, target.current.y * 0.5 + 1.5, 0.05);
    camera.lookAt(0, 0, 0);
  });

  // Update mouse position from pointer events on the canvas
  useThree(({ gl }) => {
    const handler = (e: PointerEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.current.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    gl.domElement.addEventListener('pointermove', handler);
    return () => gl.domElement.removeEventListener('pointermove', handler);
  });

  return null;
};

// Floating glass torus — the hero piece
const GlassTorus = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.15;
      ref.current.rotation.y = clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={[0, 0.2, 0]}>
        <torusGeometry args={[1.4, 0.45, 64, 128]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.2}
          chromaticAberration={0.5}
          anisotropy={0.2}
          distortion={0.15}
          distortionScale={0.3}
          temporalDistortion={0.1}
          ior={1.25}
          color="#a78bfa"
          roughness={0}
          transmission={1}
        />
      </mesh>
    </Float>
  );
};

// Orbiting small spheres
const OrbitingSpheres = () => {
  const groupRef = useRef<THREE.Group>(null);

  const spheres = useMemo(() => [
    { radius: 2.2, speed: 0.4, size: 0.12, color: '#3b82f6', offset: 0 },
    { radius: 2.5, speed: -0.3, size: 0.09, color: '#10b981', offset: Math.PI * 0.7 },
    { radius: 1.9, speed: 0.5, size: 0.1, color: '#f59e0b', offset: Math.PI * 1.3 },
    { radius: 2.8, speed: -0.2, size: 0.08, color: '#ef4444', offset: Math.PI * 0.4 },
    { radius: 2.1, speed: 0.35, size: 0.11, color: '#8b5cf6', offset: Math.PI * 1.8 },
  ], []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const s = spheres[i];
      const t = clock.elapsedTime * s.speed + s.offset;
      child.position.x = Math.cos(t) * s.radius;
      child.position.z = Math.sin(t) * s.radius;
      child.position.y = Math.sin(t * 1.5) * 0.4;
    });
  });

  return (
    <group ref={groupRef}>
      {spheres.map((s, i) => (
        <mesh key={i}>
          <sphereGeometry args={[s.size, 24, 24]} />
          <meshStandardMaterial color={s.color} emissive={s.color} emissiveIntensity={2} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
};

// Glowing ring particles
const ParticleRing = () => {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 300;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#8b5cf6'),
      new THREE.Color('#3b82f6'),
      new THREE.Color('#10b981'),
    ];

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.6 + (Math.random() - 0.5) * 0.8;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.6;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.08;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  );
};

// Ambient glow plane behind everything
const GlowPlane = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.12 + Math.sin(clock.elapsedTime * 0.5) * 0.04;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -3]} rotation={[0, 0, 0]}>
      <planeGeometry args={[12, 12]} />
      <meshBasicMaterial color="#0a0a0a" transparent opacity={0.95} />
    </mesh>
  );
};

const Scene = () => (
  <>
    <CameraRig />
    <ambientLight intensity={0.3} />
    <pointLight position={[5, 5, 5]} intensity={1} color="#8b5cf6" />
    <pointLight position={[-5, 3, -5]} intensity={0.6} color="#3b82f6" />
    <spotLight position={[0, 8, 0]} intensity={0.8} angle={0.4} penumbra={0.8} color="#ffffff" />

    <GlassTorus />
    <OrbitingSpheres />
    <ParticleRing />
    <GlowPlane />

    <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={8} blur={2.5} far={4} color="#7c3aed" />
    <Environment preset="night" />
  </>
);

export const HeroAnimation = () => {
  return (
    <div className="w-full h-[500px] lg:h-[600px]">
      <Canvas
        camera={{ position: [0, 1.5, 5.5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};
