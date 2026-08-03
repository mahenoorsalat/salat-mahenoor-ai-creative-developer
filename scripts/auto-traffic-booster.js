/**
 * Antigravity Hourly SEO & Search Traffic Acceleration Bot
 * Submits website landing pages, RSS feeds, and schemas to global search engines.
 */

const https = require('https');
const http = require('http');

const baseURL = "https://salat-mahenoor-ai-creative-develope.vercel.app";

const targetUrls = [
  `${baseURL}`,
  `${baseURL}/about`,
  `${baseURL}/work`,
  `${baseURL}/blog`,
  `${baseURL}/testimonials`,
  `${baseURL}/services/hire-ai-creative-developer`,
  `${baseURL}/services/freelance-full-stack-ai-engineer`,
  `${baseURL}/services/hire-ai-model-trainer-claude-coder`,
  `${baseURL}/services/hire-ai-agent-developer`,
  `${baseURL}/services/hire-claude-3-5-sonnet-developer`,
  `${baseURL}/services/hire-rag-vector-database-engineer`,
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
  `${baseURL}/rss.xml`,
  `${baseURL}/sitemap.xml`,
];

// 1. IndexNow API Ping (Bing, Yandex, Seznam, Naver, Yahoo)
function pingIndexNow() {
  return new Promise((resolve) => {
    console.log("⚡ [1/3] Pinging IndexNow Network (Bing, Yandex, Seznam, Naver)...");
    
    const payload = JSON.stringify({
      host: "salat-mahenoor-ai-creative-develope.vercel.app",
      key: "5340a71656cd78ac",
      keyLocation: `${baseURL}/google5340a71656cd78ac.html`,
      urlList: targetUrls,
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
      console.log(`✅ IndexNow Network Response: Status ${res.statusCode}`);
      resolve(true);
    });

    req.on('error', (err) => {
      console.error(`❌ IndexNow Ping Error: ${err.message}`);
      resolve(false);
    });

    req.write(payload);
    req.end();
  });
}

// 2. Google Sitemap Ping Engine
function pingGoogle() {
  return new Promise((resolve) => {
    console.log("⚡ [2/3] Pinging Google Search Indexing Engine...");
    const sitemapUrl = encodeURIComponent(`${baseURL}/sitemap.xml`);
    
    https.get(`https://www.google.com/ping?sitemap=${sitemapUrl}`, (res) => {
      console.log(`✅ Google Search Engine Ping Status: ${res.statusCode}`);
      resolve(true);
    }).on('error', (err) => {
      console.error(`❌ Google Ping Error: ${err.message}`);
      resolve(false);
    });
  });
}

/// 3. Ping-O-Matic & Feed Aggregators Ping
function pingFeedAggregators() {
  return new Promise((resolve) => {
    console.log("⚡ [3/4] Pinging Global RSS & Content Aggregators (Ping-O-Matic)...");
    const pingUrl = `http://pingomatic.com/ping/?title=${encodeURIComponent("Salat Mahenoor | AI Creative Developer")}&blogurl=${encodeURIComponent(baseURL)}&rssurl=${encodeURIComponent(`${baseURL}/rss.xml`)}&chk_blogs=on&chk_feedburner=on&chk_syndic8=on&chk_newsgator=on&chk_myyahoo=on`;

    http.get(pingUrl, (res) => {
      console.log(`✅ RSS Aggregators Ping Status: ${res.statusCode}`);
      resolve(true);
    }).on('error', (err) => {
      console.error(`❌ RSS Ping Warning: ${err.message}`);
      resolve(false);
    });
  });
}

// 4. Bing sitemap ping
function pingBingSitemap() {
  return new Promise((resolve) => {
    console.log("⚡ [4/4] Pinging Bing Sitemap Indexing Engine...");
    const sitemapUrl = encodeURIComponent(`${baseURL}/sitemap.xml`);

    https.get(`https://www.bing.com/webmaster/ping.aspx?siteMap=${sitemapUrl}`, (res) => {
      console.log(`✅ Bing Sitemap Ping Status: ${res.statusCode}`);
      resolve(true);
    }).on('error', (err) => {
      console.error(`❌ Bing Ping Error: ${err.message}`);
      resolve(false);
    });
  });
}

async function runTrafficBooster() {
  console.log("\n=======================================================");
  console.log("🚀 STARTING AUTOMATED HOURLY SEARCH ENGINE BOOSTER BOT");
  console.log("=======================================================\n");

  await pingIndexNow();
  await pingGoogle();
  await pingFeedAggregators();
  await pingBingSitemap();

  console.log("\n=======================================================");
  console.log("🎉 HOURLY TRAFFIC BOOST COMPLETE across all Search Engines!");
  console.log("=======================================================\n");
}

runTrafficBooster();
