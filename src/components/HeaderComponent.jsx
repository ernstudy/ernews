import React, { useState } from "react";
import { Language, ModeNight, Search } from "@mui/icons-material";
import LogoApp from "../outils/LogoApp";
import { Box } from "@mui/material";
import SearchBar from "../outils/SearchBar";

export default function HeaderComponent() {
  const [isClicked, setIsClicked] = useState(false);
  const [isID, setIsID] = useState(null);
  const languages = ["English", "Spanish", "Frensh"];

  //   const select_lang = () => {
  //     setIsClicked(true);
  //   };

  const handleSelect = (language, idx) => {
    setIsID(idx);
    console.log("The selected language is:", language);
  };

  return (
    <header>
      <div className="header-container">
        <Box sx={{ display: { xs: "flex", md: "none" }, justifySelf: "start" }}>
          <LogoApp />
        </Box>

        <nav>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <SearchBar />
          </Box>
          <div id="lang-selector" onClick={() => setIsClicked(!isClicked)}>
            <Language />
            <div
              className="options"
              style={{ display: isClicked ? "flex" : "none" }}
            >
              {languages.map((language, idx) => (
                <span
                  key={idx}
                  onClick={() => handleSelect(language, idx)}
                  className={isID == idx ? "selected" : ""}
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="mode-selector">
            <ModeNight className="custom-icon-mode" />
          </div>
        </nav>
      </div>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <SearchBar />
      </Box>
    </header>
  );
}
