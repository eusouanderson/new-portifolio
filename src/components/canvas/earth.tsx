"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { publicAssetPath } from "@/lib/utils";
import { Float, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

export interface EarthCanvasProps {
  className?: string;
  scrollVelocity?: MotionValue<number>;
}

interface CyberEarthProps {
  scrollVelocity?: MotionValue<number>;
}

const DigitalOrbitalElements = ({ scrollVelocity }: CyberEarthProps) => {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const particleCount = 48;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2 + Math.random() * 0.2;
      const radius = 0.88 + (i % 3) * 0.12;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = ((i % 5) - 2) * 0.08;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    const vel = scrollVelocity ? Math.abs(scrollVelocity.get()) : 0;
    const boost = 1 + vel * 3;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.35 * boost;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.2 * boost;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.15 * boost;
    }
  });

  return (
    <group rotation={[Math.PI / 3.2, 0, Math.PI / 5]}>
      <mesh ref={ring1Ref}>
        <ringGeometry args={[0.92, 0.95, 64]} />
        <meshBasicMaterial
          color="#00FFD1"
          side={THREE.DoubleSide}
          transparent
          opacity={0.65}
        />
      </mesh>

      <mesh ref={ring2Ref}>
        <ringGeometry args={[1.08, 1.1, 64]} />
        <meshBasicMaterial
          color="#7F00FF"
          side={THREE.DoubleSide}
          transparent
          opacity={0.5}
        />
      </mesh>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00FFD1"
          size={0.035}
          transparent
          opacity={0.8}
        />
      </points>
    </group>
  );
};

const CyberEarth = ({ scrollVelocity }: CyberEarthProps) => {
  const earth = useGLTF(publicAssetPath("/assets/canvas/planet/scene.gltf"));
  const wireframeRef = useRef<THREE.Mesh>(null);
  const icosahedronRef = useRef<THREE.Mesh>(null);
  const earthGroupRef = useRef<THREE.Group>(null);
  const tiltGroupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    earth.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const name = child.name.toLowerCase();
        if (name.includes("cloud")) {
          child.visible = false;
        } else if (
          name.includes("planet") ||
          name.includes("object_6") ||
          name.includes("object_1")
        ) {
          child.visible = true;
          const basicMat = child.material as THREE.MeshBasicMaterial;
          child.material = new THREE.MeshStandardMaterial({
            map: basicMat.map || null,
            color: new THREE.Color("#00FFD1"),
            emissive: new THREE.Color("#6E00FF"),
            emissiveIntensity: 0.65,
            roughness: 0.2,
            metalness: 0.85,
          });
        }
      }
    });
  }, [earth]);

  useFrame((state, delta) => {
    if (prefersReducedMotion) return;

    const vel = scrollVelocity ? Math.abs(scrollVelocity.get()) : 0;
    const boost = 1 + vel * 3.5;

    if (earthGroupRef.current) {
      earthGroupRef.current.rotation.y += delta * 0.35 * boost;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y += delta * 0.15 * boost;
    }

    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.y -= delta * 0.1 * boost;
      icosahedronRef.current.rotation.x += delta * 0.05 * boost;
    }

    if (tiltGroupRef.current) {
      const targetTiltX = -state.pointer.y * 0.35;
      const targetTiltZ = state.pointer.x * 0.35;
      tiltGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        tiltGroupRef.current.rotation.x,
        targetTiltX,
        0.06
      );
      tiltGroupRef.current.rotation.z = THREE.MathUtils.lerp(
        tiltGroupRef.current.rotation.z,
        targetTiltZ,
        0.06
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={tiltGroupRef} scale={3.3}>
        <group ref={earthGroupRef}>
          <primitive object={earth.scene} position-y={0} rotation-y={0} />
        </group>

        <mesh ref={wireframeRef}>
          <sphereGeometry args={[0.675, 32, 32]} />
          <meshBasicMaterial
            color="#00FFD1"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>

        <mesh ref={icosahedronRef}>
          <icosahedronGeometry args={[0.7, 2]} />
          <meshBasicMaterial
            color="#7F00FF"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>

        <DigitalOrbitalElements scrollVelocity={scrollVelocity} />
      </group>
    </Float>
  );
};

export const EarthCanvas = ({ className, scrollVelocity }: EarthCanvasProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      shadows
      frameloop={prefersReducedMotion ? "demand" : "always"}
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      className={className}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={1.8} />
      <directionalLight position={[-5, 5, 5]} intensity={2.5} color="#00FFD1" />
      <pointLight position={[6, -4, 4]} intensity={2} color="#7F00FF" />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate={!prefersReducedMotion}
          autoRotateSpeed={1.5}
          enableRotate={!prefersReducedMotion}
          rotateSpeed={0.85}
          enableDamping={true}
          dampingFactor={0.05}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
        <CyberEarth scrollVelocity={scrollVelocity} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload(publicAssetPath("/assets/canvas/planet/scene.gltf"));
