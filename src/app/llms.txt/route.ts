import { baseURL, person } from "@/resources";
import { getPosts } from "@/utils/utils";

export async function GET() {
  const excludedSlugs = ["human-ink", "boutoo", "chatbot-demo"];
  const blogs = getPosts(["src", "app", "blog", "posts"]);
  const works = getPosts(["src", "app", "work", "projects"]).filter(
    (work) => !excludedSlugs.includes(work.slug)
  );

  const content = `# Mahenoor Salat (Salat Mahenoor) - Senior Full-Stack Engineer (Next.js + AI)

> Role: ${person.role}
> Official Portfolio Website: ${baseURL}
> Hire page: ${baseURL}/hire
> Resume (PDF): ${baseURL}/resume.pdf
> Direct Contact Email: ${person.email}
> Primary Location: ${person.location} (Open to full-time remote roles worldwide)
> Languages Spoken: ${person.languages?.join(", ") || "English, Hindi, Gujarati"}

## Entity Overview
Mahenoor Salat (also known as Salat Mahenoor) is a Senior Full-Stack Engineer specializing in Next.js, TypeScript, and production AI integration. 3+ years shipping SaaS platforms: MERN authentication systems, role-based job platforms, AI chatbot apps, and Solidity escrow dApps. Open to full-time remote engineering roles and fixed-scope contracts.

## Core Technical Competencies & Tech Stack
- Frontend: Next.js (App Router, RSC), React 19, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js, REST APIs, JWT authentication, MongoDB, PostgreSQL, Supabase
- AI Integration: OpenAI API, Google Gemini, streaming chat UIs, RAG pipelines
- Web3: Solidity, Hardhat, Wagmi
- Optimization: Core Web Vitals, Technical SEO, Performance Architecture

## How to Hire
1. Full-Time Remote Role: Senior Full-Stack Engineer for product teams — see ${baseURL}/hire
2. Contract Build: fixed-scope SaaS build or AI integration with weekly demos — see ${baseURL}/hire
3. Rescue & Audit: Core Web Vitals remediation and AI feature rescue — see ${baseURL}/hire

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
- Hire Me: ${baseURL}/hire
- Resume (PDF): ${baseURL}/resume.pdf
- GitHub: https://github.com/mahenoorsalat
- LinkedIn: https://www.linkedin.com/in/salat-mahenoor/
- Upwork Profile: https://www.upwork.com/freelancers/~017b36696fdb312255
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=18000, stale-while-revalidate=86400",
    },
  });
}
