import React, { useState } from "react";
import { Language, Menu, ModeNight, Search } from "@mui/icons-material";
import LogoApp from "../outils/LogoApp";
import { Box, Drawer } from "@mui/material";
import SearchBar from "../outils/SearchBar";
import SideBar from "./SideBar";

export default function HeaderComponent() {
  const [isClicked, setIsClicked] = useState(false);
  const [isID, setIsID] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
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
            <SearchBar className="custom-icon" />
          </Box>

          {/* nav bar icons */}
          <div className="nav-bar-icons">
            <div
              id="lang-selector"
              onClick={() => setIsClicked(!isClicked)}
              className="nav-bar-icons-bg"
            >
              <Language className="custom-icon" />
              <div
                className="options nav-bar-icons-bg"
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

            <div className="mode-selector nav-bar-icons-bg">
              <ModeNight className="custom-icon" />
            </div>

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <div
                className="menu nav-bar-icons-bg"
                onClick={() => setOpenMenu(true)}
              >
                <Menu className="custom-icon" />
              </div>
            </Box>
          </div>
        </nav>
      </div>

      {/* search bar bottom  */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <SearchBar />
      </Box>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(!openMenu)}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <SideBar />
      </Drawer>
    </header>
  );
}
