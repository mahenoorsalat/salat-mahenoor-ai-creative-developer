import { NextResponse } from 'next/server';
import { baseURL } from '@/resources';
import { getPosts } from '@/utils/utils';

export async function GET() {
  const apiKey = "c9a4b872f1034e62a84d9f102581639d"; // Standard 32-char IndexNow Key
  
  const blogs = getPosts(["src", "app", "blog", "posts"]).map(p => `${baseURL}/blog/${p.slug}`);
  const works = getPosts(["src", "app", "work", "projects"]).map(p => `${baseURL}/work/${p.slug}`);
  
  const urlList = [
    baseURL,
    `${baseURL}/about`,
    `${baseURL}/work`,
    `${baseURL}/blog`,
    `${baseURL}/testimonials`,
    `${baseURL}/services/nextjs-ai-integration-engineer`,
    `${baseURL}/services/hire-contract-n8n-automation-expert`,
    `${baseURL}/services/saas-mvp-development-agency`,
    `${baseURL}/services/technical-seo-core-web-vitals-consultant`,
    ...blogs,
    ...works,
  ];

  const payload = {
    host: "salat-mahenoor-ai-creative-develope.vercel.app",
    key: apiKey,
    keyLocation: `${baseURL}/${apiKey}.txt`,
    urlList: urlList,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      urlsSubmitted: urlList.length,
      message: response.ok 
        ? "Successfully submitted all site URLs to IndexNow search engine engine network (Bing, Yandex, Naver)!" 
        : "IndexNow submission error",
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
