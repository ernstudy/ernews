import React, { useContext, useEffect } from "react";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import { Box } from "@mui/material";
import { NewsContext } from "./context/NewsContext";

export default function App() {
  const API_KEY = "b730ffa3cd151b8153e13d014410420d";
  const { setNews, userPreferences, setUserPreferences } =
    useContext(NewsContext);

  const API_URL = `https://gnews.io/api/v4/top-headlines?category=${
    userPreferences.category
  }&lang=${userPreferences.language}&q=${encodeURIComponent(
    userPreferences.query
  )}&max=10&apikey=${API_KEY}`;

  useEffect(() => {
    fetchNews();
    console.log(userPreferences);
    console.log("url", API_URL);
  }, [userPreferences]);

  const fetchNews = async () => {
    try {
      const res = await fetch(API_URL);
      const newsData = await res.json();
      // console log
      console.log("api data", newsData?.articles);

      // set data in the global news state
      setNews(newsData?.articles);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-all">
      {/* Side bar  */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <SideBar />
      </Box>

      <>
        {/* Home page */}
        <HomePage />
      </>
    </div>
  );
}
