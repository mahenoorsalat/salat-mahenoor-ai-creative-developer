import { baseURL, routes as routesConfig } from "@/resources";
import { NextResponse } from "next/server";

export async function GET() {
  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig]
  );

  const urlList = activeRoutes.map((route) => `${baseURL}${route === "/" ? "" : route}`);
  const host = baseURL.replace("https://", "").replace("http://", "");

  const payload = {
    host: host,
    key: "5340a71656cd78ac",
    keyLocation: `${baseURL}/google5340a71656cd78ac.html`,
    urlList: urlList,
  };

  try {
    // 1. Submit IndexNow to Bing / Yandex / Seznam / Naver
    const indexNowRes = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    // 2. Ping Google Sitemap Indexing Engine
    const googlePingRes = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(`${baseURL}/sitemap.xml`)}`);

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      indexNowStatus: indexNowRes.status,
      googlePingStatus: googlePingRes.status,
      submittedUrlsCount: urlList.length,
      message: "Daily automated search indexing completed successfully across all search engines.",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Daily indexing failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
