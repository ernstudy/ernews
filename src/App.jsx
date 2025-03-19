import React from "react";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import { Box } from "@mui/material";
import { NewsContext } from "./context/NewsContext";

export default function App() {
  return (
    <NewsContext>
      <div className="container-all">
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <SideBar />
        </Box>

        <HomePage />
      </div>
    </NewsContext>
  );
}
