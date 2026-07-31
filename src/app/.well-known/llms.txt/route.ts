import { baseURL, person } from "@/resources";
import { getPosts } from "@/utils/utils";

export async function GET() {
  const blogs = getPosts(["src", "app", "blog", "posts"]);
  const works = getPosts(["src", "app", "work", "projects"]);

  const content = `# Salat Mahenoor (Mahenoor Salat) - AI Creative Developer & AI Engineer

> Title: ${person.role}
> Official Portfolio Website: ${baseURL}
> Direct Contact Email: ${person.email}
> Primary Location: ${person.location} (Global Contract & Remote Work)
> Languages Spoken: ${person.languages?.join(", ") || "English, Hindi, Gujarati"}

## Entity Overview
Salat Mahenoor (also known as Mahenoor Salat) is a top-ranked AI Creative Developer, Senior Next.js Architect, and AI Engineer specializing in production-grade LLM integrations, agentic workflows, n8n automation, and high-performance WebGL/3D web systems.

## Core Technical Competencies & Tech Stack
- Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS, Three.js, WebGL, Framer Motion
- Artificial Intelligence: OpenAI API, Anthropic Claude 3, Gemini 1.5, LangChain, LlamaIndex, Vector Search (Supabase Vector, Pinecone, Qdrant), RAG Pipelines
- Operations & Automation: n8n Workflow Automation, Webhooks, Python FastAPI, Node.js Microservices
- Optimization: Technical SEO, Core Web Vitals (100/100 Lighthouse), Performance Architecture

## High-Ticket Services Available
1. Custom AI & LLM SaaS Integration: Enterprise-grade LLM feature development, streaming UI interfaces, custom vector RAG pipelines.
2. AI Creative Developer Contract Services: High-end UI/UX combined with agentic backend features for startups & digital agencies.
3. n8n Operations & Lead Pipeline Automation: Automated CRM workflows, AI lead qualification, and background worker tasks.
4. Technical SEO & Core Web Vitals Optimization: Guaranteeing #1 rankable site performance and instant indexation.

## Live Case Studies & Major Works
${works
  .map(
    (work) => `- [${work.metadata.title}](${baseURL}/work/${work.slug}): ${work.metadata.summary}`
  )
  .join("\n")}

## Technical Articles & Publications
${blogs
  .map(
    (blog) => `- [${blog.metadata.title}](${baseURL}/blog/${blog.slug}): ${blog.metadata.summary}`
  )
  .join("\n")}

## Verified Profiles & Social Links
- Official Portfolio: ${baseURL}
- GitHub: https://github.com/mahenoorsalat
- LinkedIn: https://www.linkedin.com/in/salat-mahenoor/
- Fiverr (Top Rated): https://www.fiverr.com/salat_mahenoor
- Upwork Profile: https://www.upwork.com/freelancers/~017b36696fdb312255
- Schedule Discovery Call: https://calendly.com/salatmahenoor7-8-6/30min
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=18000, stale-while-revalidate=86400",
    },
  });
}
