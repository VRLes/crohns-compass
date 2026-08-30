import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply no-cache to HTML pages only.
        // Next.js static assets (JS bundles, images, fonts) have hashed filenames
        // per build, so they're safe to cache — no need to re-download every visit.
        source: "/((?!_next/static|_next/image|favicon.ico).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;