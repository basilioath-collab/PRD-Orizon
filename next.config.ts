import type { NextConfig } from "next";

const repositoryBasePath = "/PRD-Orizon";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repositoryBasePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
