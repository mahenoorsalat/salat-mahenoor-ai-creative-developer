import { baseURL } from "@/resources";

export async function GET() {
  const content = `Contact: mailto:salatmahenoor7.8.6@gmail.com
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: ${baseURL}/.well-known/security.txt
Policy: ${baseURL}/about
Hiring: ${baseURL}/services/ai-product-manager-llm-trainer
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=18000, stale-while-revalidate=86400",
    },
  });
}
