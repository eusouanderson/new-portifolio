/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
    ],
  },
  
  experimental: {
   outputStandalone: true,
  },
};

export default nextConfig;