"use client";

import { ReactNode, useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Snap from "lenis/snap";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

const ScrollSnapManager = () => {
  const lenis = useLenis();
  const snapRef = useRef<Snap | null>(null);

  useEffect(() => {
    if (!lenis) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const snap = new Snap(lenis, {
      type: "proximity",
      distanceThreshold: "15%",
      debounce: 250,
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    snapRef.current = snap;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section")
    );

    sections.forEach((section) => {
      snap.addElement(section, { align: "start" });
    });

    return () => {
      snap.destroy();
      snapRef.current = null;
    };
  }, [lenis]);

  return null;
};

export const SmoothScrollProvider = ({
  children,
}: SmoothScrollProviderProps) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.2,
        autoRaf: true,
        anchors: {
          offset: -80,
        },
      }}
    >
      <ScrollSnapManager />
      {children}
    </ReactLenis>
  );
};

