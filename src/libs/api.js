import { envConfig } from "../config/env.config.js";

const fetchNews = async (category, language, query, max = 10) => {
  try {
    const params = new URLSearchParams({
      category,
      language,
      query,
      max,
    });

    let res;

    if (import.meta.env.DEV && envConfig.apiKey) {
      const apiUrl = new URL("/api/v4/top-headlines", envConfig.apiBaseUrl);
      const externalParams = new URLSearchParams({
        category,
        lang: language,
        q: query,
        max,
        apikey: envConfig.apiKey,
      });
      apiUrl.search = externalParams.toString();
      res = await fetch(apiUrl.toString());
    } else {
      res = await fetch(`/api/news?${params}`);
    }

    const contentType = res.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`API error: ${res.status} ${errorText}`);
    }

    if (!isJson) {
      const bodyText = await res.text();
      throw new Error(
        `Non-JSON API response: ${res.status} ${contentType} ${bodyText.slice(0, 200)}`,
      );
    }

    const newsData = await res.json();
    return newsData?.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export { fetchNews };
