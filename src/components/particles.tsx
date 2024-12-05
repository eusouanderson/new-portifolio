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
            value: "#000000", 
          },
        },
        fpsLimit: 240,
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
              duration: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff", 
          },
          links: {
            color: "#ffffff",
            distance: 256,
            enable: true,
            opacity: 0.8,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2, 
            straight: false,
          },
          number: {
            density: {
              enable: false,
              //area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 1, 
          },
          shape: {
            type: "slim",
          },
          size: {
            value: { min: 1, max: 16 }, 
          },
        },
        detectRetina: true,
      }}
    />
  );
};
