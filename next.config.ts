import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/work/hanzi-puzzle",
        destination: "/work/hanzi-tree",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
