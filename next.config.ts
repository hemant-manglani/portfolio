import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Only prefix paths on production (GitHub Pages); keep dev at "/"
  basePath: isProd ? "/portfolio" : undefined,
  assetPrefix: isProd ? "/portfolio" : undefined,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
