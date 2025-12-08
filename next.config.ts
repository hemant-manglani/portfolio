import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
