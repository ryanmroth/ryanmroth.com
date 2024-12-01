import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ryan M. Roth',
    short_name: 'RMR',
    description: 'Personal website of Ryan M. Roth, Cybersecurity Professional',
    start_url: '/',
    display: 'standalone',
    background_color: '#f3f4f6',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
