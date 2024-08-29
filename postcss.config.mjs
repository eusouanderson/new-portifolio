/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Opcionalmente, você pode adicionar postcss-preset-env para suporte a recursos CSS modernos
    // "postcss-preset-env": { stage: 3 }
  },
};

export default config;
