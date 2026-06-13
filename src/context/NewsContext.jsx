import { useContext, createContext, useState, useEffect, useRef } from "react";
import { envConfig } from "../config/env.config.js";
import { fetchNews } from "../libs/api.js";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const didRun = useRef(false);
  const [news, setNews] = useState([]);
  const [userPreferences, setUserPreferences] = useState({
    language: "en",
    category: "general",
    query: "",
  });

  const [loadingData, setLoadingData] = useState(true);

  const url = `${envConfig.apiBaseUrl}/top-headlines?category=${
    userPreferences.category
  }&lang=${userPreferences.language}&q=${encodeURIComponent(
    userPreferences.query,
  )}&max=10&apikey=${envConfig.apiKey}`;

  useEffect(() => {
    if (!loadingData) {
      init();
    }

    if (loadingData) {
      setTimeout(() => {
        setLoadingData(false);
      }, 2000);
    }
  }, [loadingData, userPreferences]);

  const init = async () => {
    try {
      // fetch news
      const newsData = await fetchNews(url);

      setNews(newsData?.articles ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  // light dark mode
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme" || "light");
  });

  const toggleTheme = () => {
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    console.log("new theme =>:", newTheme);
  };
  useEffect(() => {
    const root = document.documentElement;
    root.classList = theme == "light" ? "light-mode" : "dark-mode";
  }, [theme]);

  return (
    <NewsContext.Provider
      value={{
        news,
        setNews,
        loadingData,
        userPreferences,
        setUserPreferences,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
