const https = require('https');

const baseURL = "https://salat-mahenoor-ai-creative-develope.vercel.app";

const urlsToSubmit = [
  `${baseURL}`,
  `${baseURL}/about`,
  `${baseURL}/work`,
  `${baseURL}/blog`,
  `${baseURL}/testimonials`,
  `${baseURL}/services/hire-ai-creative-developer`,
  `${baseURL}/services/freelance-full-stack-ai-engineer`,
  `${baseURL}/services/nextjs-ai-integration-engineer`,
  `${baseURL}/services/hire-contract-n8n-automation-expert`,
  `${baseURL}/services/saas-mvp-development-agency`,
  `${baseURL}/services/technical-seo-core-web-vitals-consultant`,
  `${baseURL}/services/ai-product-manager-llm-trainer`,
  `${baseURL}/solutions/upwork`,
  `${baseURL}/solutions/reddit`,
  `${baseURL}/solutions/fiverr`,
  `${baseURL}/llms.txt`,
  `${baseURL}/.well-known/llms.txt`,
  `${baseURL}/feed.xml`,
  `${baseURL}/sitemap.xml`,
];

async function submitIndexNow() {
  console.log("🚀 Triggering Multi-Platform Search Engine Indexing (Bing, Yandex, Seznam, Naver)...");
  
  const payload = JSON.stringify({
    host: "salat-mahenoor-ai-creative-develope.vercel.app",
    key: "5340a71656cd78ac",
    keyLocation: `${baseURL}/google5340a71656cd78ac.html`,
    urlList: urlsToSubmit,
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  };

  const req = https.request(options, (res) => {
    console.log(`✅ IndexNow Response Status: ${res.statusCode}`);
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  req.on('error', (error) => {
    console.error(`❌ IndexNow submission error:`, error);
  });

  req.write(payload);
  req.end();
}

submitIndexNow();
