import { getPosts } from "@/utils/utils";
import { baseURL, person, home } from "@/resources";

export async function GET() {
  const blogs = getPosts(["src", "app", "blog", "posts"]);
  const works = getPosts(["src", "app", "work", "projects"]);

  const items = [
    ...blogs.map((post) => ({
      title: post.metadata.title,
      description: post.metadata.summary,
      link: `${baseURL}/blog/${post.slug}`,
      pubDate: new Date(post.metadata.publishedAt || Date.now()).toUTCString(),
    })),
    ...works.map((post) => ({
      title: `${post.metadata.title} - Case Study`,
      description: post.metadata.summary,
      link: `${baseURL}/work/${post.slug}`,
      pubDate: new Date(post.metadata.publishedAt || Date.now()).toUTCString(),
    })),
  ];

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${person.name} | AI &amp; Next.js Creative Developer</title>
    <link>${baseURL}</link>
    <description>${home.description}</description>
    <language>en-us</language>
    <atom:link href="${baseURL}/feed.xml" rel="self" type="application/rss+xml" />
    ${items
      .map(
        (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <pubDate>${item.pubDate}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=18000, stale-while-revalidate=86400",
    },
  });
}
