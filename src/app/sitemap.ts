import { MetadataRoute } from 'next';
import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString().split("T")[0];

  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Only include solution routes that are NOT already in routesConfig to avoid duplicates
  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: today,
    changeFrequency: route === '/' ? 'weekly' as const : 'monthly' as const,
    priority: route === '/' ? 1.0 : route === '/about' ? 0.9 : 0.8,
  }));

  // Deduplicate: only add solution routes not already in routesConfig
  const solutionPlatforms = ["upwork", "reddit", "fiverr"];
  const routeKeys = new Set(activeRoutes);
  const solutionRoutes = solutionPlatforms
    .filter((p) => !routeKeys.has(`/solutions/${p}`))
    .map((platform) => ({
      url: `${baseURL}/solutions/${platform}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  return [...routes, ...blogs, ...works, ...solutionRoutes];
}

