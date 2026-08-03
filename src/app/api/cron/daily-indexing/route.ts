import { baseURL, routes as routesConfig } from "@/resources";
import { NextResponse } from "next/server";

const GOOGLE_SITEMAP_URL = `${baseURL}/sitemap.xml`;

function normalizeHost(url: string) {
  return url.replace(/^https?:\/\//, "");
}

function formatPingResult(result: Promise<Response>) {
  return result
    .then((res) => ({ status: res.status, ok: res.ok }))
    .catch((error: any) => ({ error: error?.message || String(error) }));
}

export async function GET() {
  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig]
  );

  const urlList = activeRoutes.map((route) => `${baseURL}${route === "/" ? "" : route}`);
  const host = normalizeHost(baseURL);

  const payload = {
    host,
    key: "5340a71656cd78ac",
    keyLocation: `${baseURL}/google5340a71656cd78ac.html`,
    urlList,
  };

  const indexNowPromise = fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const googlePromise = fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(GOOGLE_SITEMAP_URL)}`);
  const bingPromise = fetch(`https://www.bing.com/webmaster/ping.aspx?siteMap=${encodeURIComponent(GOOGLE_SITEMAP_URL)}`);
  const pingomaticPromise = fetch(`https://pingomatic.com/ping/?title=${encodeURIComponent("Salat Mahenoor | AI Creative Developer")}&blogurl=${encodeURIComponent(baseURL)}&rssurl=${encodeURIComponent(`${baseURL}/rss.xml`)}&chk_blogs=on&chk_feedburner=on&chk_syndic8=on&chk_newsgator=on&chk_myyahoo=on`);

  const [indexNowResult, googleResult, bingResult, pingomaticResult] = await Promise.allSettled([
    indexNowPromise,
    googlePromise,
    bingPromise,
    pingomaticPromise,
  ]);

  const results = {
    indexNow: indexNowResult.status === "fulfilled" ? { status: indexNowResult.value.status, ok: indexNowResult.value.ok } : { error: String(indexNowResult.reason) },
    google: googleResult.status === "fulfilled" ? { status: googleResult.value.status, ok: googleResult.value.ok } : { error: String(googleResult.reason) },
    bing: bingResult.status === "fulfilled" ? { status: bingResult.value.status, ok: bingResult.value.ok } : { error: String(bingResult.reason) },
    pingomatic: pingomaticResult.status === "fulfilled" ? { status: pingomaticResult.value.status, ok: pingomaticResult.value.ok } : { error: String(pingomaticResult.reason) },
  };

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    submittedUrlsCount: urlList.length,
    results,
    message: "Automated indexing submission completed across Google, Bing, IndexNow, and RSS aggregators.",
  });
}
