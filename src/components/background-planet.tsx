"use client";

import { EarthCanvas } from "@/components/canvas/earth";
import {
    motion,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "framer-motion";
import { useCallback, useEffect, useState } from "react";

interface SectionConfig {
  id: string;
  side: number;
}

const sectionConfigs: SectionConfig[] = [
  { id: "hero", side: 1 },
  { id: "about-me", side: 0 },
  { id: "work-exp", side: 1 },
  { id: "tech", side: 0 },
  { id: "ai-ecosystem", side: 1 },
  { id: "projects", side: 0 },
  { id: "contact-me", side: 1 },
];

export const BackgroundPlanet = () => {
  const [dimensions, setDimensions] = useState({
    width: 1200,
    height: 800,
  });
  const [isMounted, setIsMounted] = useState(false);

  const targetXNormalized = useMotionValue(1);

  const { scrollYProgress } = useScroll();

  const checkSection = useCallback(() => {
    const trigger = window.innerHeight * 0.45;
    let currentSide = 1;
    let found = false;

    for (const item of sectionConfigs) {
      const el = document.getElementById(item.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= trigger && rect.bottom >= trigger) {
          currentSide = item.side;
          found = true;
          break;
        }
      }
    }

    if (!found) {
      const progress = scrollYProgress.get();
      if (progress < 0.12) currentSide = 1;
      else if (progress < 0.26) currentSide = 0;
      else if (progress < 0.44) currentSide = 1;
      else if (progress < 0.6) currentSide = 0;
      else if (progress < 0.75) currentSide = 1;
      else if (progress < 0.89) currentSide = 0;
      else currentSide = 1;
    }

    if (targetXNormalized.get() !== currentSide) {
      targetXNormalized.set(currentSide);
    }
  }, [scrollYProgress, targetXNormalized]);

  useEffect(() => {
    setIsMounted(true);
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      checkSection();
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", checkSection, { passive: true });

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", checkSection);
    };
  }, [checkSection]);

  useMotionValueEvent(scrollYProgress, "change", checkSection);

  const planetSize =
    dimensions.width < 640
      ? 200
      : dimensions.width < 1024
      ? 280
      : 380;

  const leftX = Math.max(12, Math.round(dimensions.width * 0.03));
  const rightX = Math.max(
    12,
    dimensions.width - planetSize - Math.round(dimensions.width * 0.03)
  );

  const topY = Math.max(70, Math.round(dimensions.height * 0.08));
  const bottomY = Math.max(70, dimensions.height - planetSize - 80);

  const smoothXNormalized = useSpring(targetXNormalized, {
    stiffness: 260,
    damping: 24,
    mass: 0.65,
  });

  const targetY = useTransform(scrollYProgress, [0, 1], [topY, bottomY]);

  const smoothY = useSpring(targetY, {
    stiffness: 30,
    damping: 22,
    mass: 1.8,
  });

  const x = useTransform(
    smoothXNormalized,
    (val) => leftX + val * (rightX - leftX)
  );

  const xVelocity = useVelocity(smoothXNormalized);
  const tilt = useTransform(xVelocity, [-6, 0, 6], [-12, 0, 12]);
  const smoothTilt = useSpring(tilt, {
    stiffness: 200,
    damping: 20,
  });

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{
          x,
          y: smoothY,
          rotateZ: smoothTilt,
          width: planetSize,
          height: planetSize,
        }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 via-light-blue/15 to-purple-600/25 blur-3xl scale-95 pointer-events-none -z-10" />
        <EarthCanvas className="w-full h-full" />
      </motion.div>
    </div>
  );
};
