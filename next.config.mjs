/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build', // Muda o diretório de saída para 'build'
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      }
    ]
  }
};

export default nextConfig;
