import { MetadataRoute } from 'next';
import { baseURL } from "@/resources";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/og/*', '/llms.txt', '/.well-known/llms.txt', '/feed.xml', '/sitemap.xml', '/api/indexnow'],
        disallow: [
          '/_next/*',
          '/admin/*',
          '/*?q=',
          '/*?s=',
          '/*?ref=',
          '/*?utm_',
        ],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'PerplexityBot', 'Google-Extended', 'Applebot', 'Amazonbot', 'Bytespider', 'CCBot', 'Cohere-ai'],
        allow: ['/', '/llms.txt', '/.well-known/llms.txt', '/feed.xml'],
      }
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
