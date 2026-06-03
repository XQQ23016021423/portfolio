import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // If deploying to GitHub Pages project site (not user site), set basePath:
  // e.g. basePath: "/portfolio",
  // basePath: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
