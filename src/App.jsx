import React, { useContext, useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import { Box, CircularProgress } from "@mui/material";
import { NewsContext } from "./context/NewsContext";
import { envConfig } from "./config/env.config";

export default function App() {
  const { loadingData } = useContext(NewsContext);

  return (
    <div className="container-all">
      {/* Side bar  */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <SideBar />
      </Box>

      <>
        {/* Home page */}
        {loadingData ? (
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              width: "100%",
              height: "100vh",
            }}
          >
            <CircularProgress sx={{ margin: "auto" }} />
          </div>
        ) : (
          <HomePage />
        )}
      </>
    </div>
  );
}
