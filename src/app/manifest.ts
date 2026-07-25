import { MetadataRoute } from 'next';
import { person, home } from '@/resources';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${person.name} | AI Creative Developer`,
    short_name: person.name,
    description: home.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
