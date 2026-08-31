import type { NextConfig } from "next";

const repo = "DEMWebsite";
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: `https://mike05521.github.io${basePath}`,
  },
};

export default nextConfig;
