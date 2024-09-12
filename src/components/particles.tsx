"use client";

import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBG = () => {

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = async (container?: any) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles-bg"
      className="-z-10"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0a0b0d", // Darker background for a modern look
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", // Light grey particles for a subtle effect
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2, // Slightly slower for a smoother effect
            straight: false,
          },
          number: {
            density: {
              enable: true,
              //area: 800,
            },
            value: 100, // Increased particle count for more density
          },
          opacity: {
            value: 1, // Increased opacity for better visibility
          },
          shape: {
            type: "slim",
          },
          size: {
            value: { min: 1, max: 6 }, // Slightly larger particles
          },
        },
        detectRetina: true,
      }}
    />
  );
};
