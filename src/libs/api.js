const fetchNews = async (url) => {
  const res = await fetch(url);
  const newsData = await res.json();
  if (!newsData) throw new Error("Error to fetch data");

  return newsData;
};

export { fetchNews };
