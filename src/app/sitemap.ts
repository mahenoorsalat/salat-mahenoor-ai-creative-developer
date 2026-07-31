import { MetadataRoute } from 'next';
import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = new Date().toISOString().split("T")[0];

  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt || today,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt || today,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = activeRoutes.map((route) => {
    let priority = 0.8;
    if (route === "/") priority = 1.0;
    else if (route === "/about" || route.startsWith("/services/")) priority = 0.95;
    else if (route === "/work" || route === "/blog") priority = 0.9;

    return {
      url: `${baseURL}${route !== "/" ? route : ""}`,
      lastModified: today,
      changeFrequency: route === '/' ? 'daily' as const : 'weekly' as const,
      priority: priority,
    };
  });

  const solutionPlatforms = ["upwork", "reddit", "fiverr"];
  const routeKeys = new Set(activeRoutes);
  const solutionRoutes = solutionPlatforms
    .filter((p) => !routeKeys.has(`/solutions/${p}`))
    .map((platform) => ({
      url: `${baseURL}/solutions/${platform}`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    }));

  return [...routes, ...blogs, ...works, ...solutionRoutes];
}
