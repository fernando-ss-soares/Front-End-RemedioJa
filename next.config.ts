import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
   images: {
    remotePatterns: [{
        protocol: 'https',
        hostname: 'product-data.raiadrogasil.io',
        port: '',
        pathname: '/images/**',
        search: '',
      },],
  },
};

export default nextConfig;
