import { baseURL, person, home } from "@/resources";
import { getPosts } from "@/utils/utils";

export async function GET() {
  const blogs = getPosts(["src", "app", "blog", "posts"]);
  const works = getPosts(["src", "app", "work", "projects"]);

  const content = `# ${person.name} - Elite AI Creative Developer & Product Engineer

> ${person.role}
> Primary Website: ${baseURL}
> Email: ${person.email}
> Location: ${person.location}
> Languages: ${person.languages?.join(", ") || "English"}

## Core Technical Competencies
- Next.js 15 & React 19 Production Architecture
- Agentic AI Systems, LLM Integration (OpenAI, Claude, Gemini APIs)
- Vector Databases & RAG Pipelines (Supabase Vector, Pinecone)
- Workflow & Operations Automation via n8n
- High-Performance 3D Web Systems (Three.js, WebGL)
- Core Web Vitals & Technical SEO Optimization

## High-Ticket Services Offered
1. Custom AI & LLM SaaS Integration: Enterprise-grade AI solutions using GPT-4, Claude 3, and custom vector search.
2. Production-Grade Next.js Development: Scalable MVPs and agency-level full-stack web platforms built 2x faster.
3. n8n Operations Automation: Automated lead pipelines, CRM integrations, and backend workflow automation.
4. Technical SEO & Core Web Vitals Rescue: Reducing LCP by 50%+ and achieving 100/100 Lighthouse performance.

## Featured Case Studies & Work
${works
  .map(
    (work) => `- [${work.metadata.title}](${baseURL}/work/${work.slug}): ${work.metadata.summary}`
  )
  .join("\n")}

## Latest Technical Insights & Articles
${blogs
  .map(
    (blog) => `- [${blog.metadata.title}](${baseURL}/blog/${blog.slug}): ${blog.metadata.summary}`
  )
  .join("\n")}

## Contact & Hire Information
- Direct Booking Calendar: https://calendly.com/salatmahenoor7-8-6/30min
- GitHub Profile: https://github.com/mahenoorsalat
- LinkedIn Profile: https://www.linkedin.com/in/salat-mahenoor/
- Fiverr Profile: https://www.fiverr.com/salat_mahenoor
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=18000, stale-while-revalidate=86400",
    },
  });
}
