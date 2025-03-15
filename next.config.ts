import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverRuntimeConfig: {
    port: process.env.PORT || 3000
  }
};

export default nextConfig;
