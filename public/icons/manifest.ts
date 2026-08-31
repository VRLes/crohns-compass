import type { MetadataRoute } from 'next'

/**
 * PWA manifest for IBD Compass.
 * Next.js auto-serves this as /manifest.webmanifest and injects
 * the correct <link rel="manifest"> into every page.
 *
 * Icons here are for Android "Add to Home Screen" and the browser's
 * install prompt. iOS uses /app/apple-icon.png separately (auto-detected
 * by Next.js from the filename).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IBD Compass',
    short_name: 'IBD Compass',
    description:
      'Evidence-based information about IBD — treatments, diet, research and mindfulness for Crohn\'s disease and ulcerative colitis.',
    start_url: '/',
    display: 'standalone',       // Opens without browser chrome, like a native app
    background_color: '#21503D', // Splash screen background on Android
    theme_color: '#21503D',      // Browser chrome/status bar tint on mobile
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable', // Works as both regular AND Android adaptive icon
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}
