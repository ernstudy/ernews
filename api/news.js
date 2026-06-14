export default async function handler(req, res) {
  const { category, language, query, max } = req.query;
  const apiKey = process.env.VITE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&q=${encodeURIComponent(
      query || "",
    )}&max=${max}&apikey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.setHeader("Cache-Control", "max-age=300"); // Cache por 5 minutos
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    return res.status(500).json({ error: "Failed to fetch news" });
  }
}
