import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IBD Compass",
    short_name: "IBD Compass",
    description:
      "Evidence-based information about IBD — treatments, diet, research and mindfulness for Crohn's disease and ulcerative colitis.",
    start_url: "/",
    display: "standalone",
    background_color: "#21503D",
    theme_color: "#21503D",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
