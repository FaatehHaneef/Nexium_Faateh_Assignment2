import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {},
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      dns: false,
      fs: false,
      net: false,
      tls: false,
      'fs/promises': false,
      'timers/promises': false,
    };
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
