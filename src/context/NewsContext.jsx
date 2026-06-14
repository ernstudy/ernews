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

  useEffect(() => {
    if (!loadingData) {
      fetchNewsData();
    }

    if (loadingData) {
      const timer = setTimeout(() => {
        setLoadingData(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loadingData, userPreferences]);

  const fetchNewsData = async () => {
    try {
      const newsData = await fetchNews(
        userPreferences.category,
        userPreferences.language,
        userPreferences.query,
        10,
      );
      setNews(newsData);
    } catch (error) {
      console.error("Error fetching news:", error);
      setNews([]);
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
