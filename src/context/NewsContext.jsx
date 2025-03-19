import { useContext, createContext, useState } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [userPreferences, setUserPreferences] = useState({
    language: "",
    category: "",
  });

  return (
    <NewsContext.Provider
      value={{ news, setNews, userPreferences, setUserPreferences }}
    >
      {children}
    </NewsContext.Provider>
  );
};
