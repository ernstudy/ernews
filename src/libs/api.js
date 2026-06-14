const fetchNews = async (url) => {
  const res = await fetch(url);
  const newsData = await res.json();

  if (!newsData) return [];

  return newsData.articles;
};

export { fetchNews };
