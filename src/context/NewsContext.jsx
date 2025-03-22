import { useContext, createContext, useState, useEffect } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [userPreferences, setUserPreferences] = useState({
    language: "en",
    category: "general",
    query: "",
  });

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
