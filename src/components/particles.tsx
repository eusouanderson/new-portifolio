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
      className="-z-10 fixed inset-0"
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "#0d0d0d", // fundo escuro e moderno
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#9D00FF", // roxo tecnológico
          },
          links: {
            color: "#00ffff", // cyan neon
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 60,
          },
          opacity: {
            value: 10,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 33 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}