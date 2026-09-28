import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/work/hanzi-puzzle",
        destination: "/work/hanzitree",
        permanent: true,
      },
      {
        source: "/work/hanzi-tree",
        destination: "/work/hanzitree",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/hanzitree/play",
        destination: "/hanzitree/play/index.html",
      },
      {
        source: "/hanzitree/play/",
        destination: "/hanzitree/play/index.html",
      },
    ];
  },
};

export default nextConfig;
