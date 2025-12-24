import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Only use webpack config when not using Turbopack
  ...(process.env.TURBOPACK ? {} : {
    webpack: (config) => {
      if (process.env.NODE_ENV === 'development') {
        // Suppress hydration warnings from browser extensions
        config.resolve.fallback = { ...config.resolve.fallback, fs: false };
      }
      return config;
    },
  }),
};

export default nextConfig;
