import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.spoonacular.com',
        port: '',
        search: '',
      }, 
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
