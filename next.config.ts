import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/test-task-products-table/' : '',
  basePath: isProd ? '/test-task-products-table' : '',
  output: 'export'
};

export default nextConfig;