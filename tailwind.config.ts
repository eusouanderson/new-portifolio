import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/custom-animation.css",
    "./src/styles/stroke-animation.css",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#24afc1",
        "primary": "#1795a8",
        "secondary": "#24afc1",
        "accent": "#ffd700",
      },
      backgroundImage: {
        "background-home": "url('/assets/images/bg.png')",
      },
      keyframes: {
        MoveUpInitial: {
          to: {
            transform: "translate3d(0,-105%,0)",
          },
        },
        MoveUpEnd: {
          from: {
            transform: "translate3d(0,100%,0)",
          },
          to: {
            transform: "translate3d(0,0,0)",
          },
        },
        Floating: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-1%)",
          },
        },
        AutoRun: {
          "0%": {
            transform: "perspective(800px) rotateX(-16deg) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(800px) rotateX(-16deg) rotateY(360deg)",
          },
        },
      },
      animation: {
        MoveUpInitial: "MoveUpInitial",
        MoveUpEnd: "MoveUpEnd",
        Floating: "Floating 2s infinite",
        AutoRun: "AutoRun 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
