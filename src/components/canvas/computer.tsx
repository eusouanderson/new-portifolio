"use client";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useMemo } from "react";
import CanvasLoader from "../loader";

interface Props {
  isMobile?: boolean;
}

const Computer = ({ isMobile = false }: Props) => {
  const { scene } = useGLTF("/assets/canvas/drone/scene.gltf");

  // Ajustar a escala para um valor maior
  const scale = useMemo(() => (isMobile ? 6.0 : 4.0), [isMobile]);
  // Ajustar a posição para acomodar o aumento do modelo
  const position = useMemo(
    () => (isMobile ? [0, -4, -3] : [0, -3, -2]),
    [isMobile]
  );

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={[2048, 2048]}  // Aumentado para uma maior resolução de sombras
      />
      <pointLight intensity={1} position={[1, 1, 1]} />
      <primitive
        object={scene}
        scale={scale}
        position={position}
      />
    </mesh>
  );
};

export const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
