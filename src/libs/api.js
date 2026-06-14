const fetchNews = async (category, language, query, max = 10) => {
  try {
    const params = new URLSearchParams({
      category,
      language,
      query,
      max,
    });

    const res = await fetch(`/api/news?${params}`);

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const newsData = await res.json();
    return newsData?.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export { fetchNews };
