/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
    ],
  },
  output: 'export', 
};

export default nextConfig;
