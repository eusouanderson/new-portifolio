"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";

export const ParticlesBG = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <Particles
      id="tsparticles-bg"
      className="-z-10 fixed inset-0"
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "#0d0d0d",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.35,
              },
            },
          },
        },
        particles: {
          color: {
            value: ["#6E00FF", "#00FFD1", "#7F00FF"],
          },
          links: {
            color: "#6E00FF",
            distance: 120,
            enable: true,
            opacity: 0.18,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 75,
          },
          opacity: {
            value: { min: 0.2, max: 0.6 },
            animation: {
              enable: true,
              speed: 0.6,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};