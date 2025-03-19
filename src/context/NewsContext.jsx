import { useContext, createContext, useState } from "react";

export const NewsContext = createContext();

const [news, setNews] = useState([]);

const newsProvider = (children) => {
  <AppContext.Provider value={{ news, setNews }}>
    {children}
  </AppContext.Provider>;
};

export const useNewsContext = useContext(newsProvider);
