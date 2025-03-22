import React, { useContext, useState } from "react";
import {
  ArrowDropDown,
  LightMode,
  Menu,
  ModeEdit,
  ModeFanOff,
  ModeNight,
  ModeNightOutlined,
  ModeNightRounded,
  ModeNightSharp,
  ModeNightTwoTone,
  Nightlight,
  Search,
} from "@mui/icons-material";
import LogoApp from "../outils/LogoApp";
import { Box, Drawer } from "@mui/material";
import SearchBar from "../outils/SearchBar";
import SideBar from "./SideBar";
import { NewsContext } from "../context/NewsContext";

export default function HeaderComponent() {
  const { userPreferences, setUserPreferences, theme, toggleTheme } =
    useContext(NewsContext);

  const [isClicked, setIsClicked] = useState(false);
  const [isID, setIsID] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  // language
  const languages = [
    { name: "English", code: "en" },
    { name: "Spanish", code: "es" },
    { name: "French", code: "fr" },
    { name: "German", code: "de" },
    { name: "Italian", code: "it" },
    { name: "Japanese", code: "ja" },
    { name: "Chinese", code: "zh" },
    { name: "Arabic", code: "ar" },
    { name: "Russian", code: "ru" },
    { name: "Portuguese", code: "pt" },
  ];

  const selectLanguage = (language, idx) => {
    setIsID(idx);

    // define language
    console.log("The selected language is:", language);
    setUserPreferences((prevPref) => ({ ...prevPref, language: language }));
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

          {/* nav bar icons */}
          <div className="navbar_icons">
            <div id="lang-selector" onClick={() => setIsClicked(!isClicked)}>
              <div className="lang-selector-item navbar_icons-box">
                {userPreferences.language}
                <ArrowDropDown className="navbar_icons-box-icon" />
              </div>

              <div
                className="options"
                style={{ display: isClicked ? "flex" : "none" }}
              >
                {languages.map((language, idx) => (
                  <span
                    key={idx}
                    onClick={() => selectLanguage(language.code, idx)}
                    className={
                      isID == idx || userPreferences.language == language.code
                        ? "selected"
                        : ""
                    }
                  >
                    {language.name}
                  </span>
                ))}
              </div>
            </div>

            {/* mode theme  */}
            <div
              className="mode_selector navbar_icons-box"
              onClick={toggleTheme}
            >
              {theme == "light" ? (
                <ModeNightSharp className="navbar_icons-box-icon" />
              ) : (
                <LightMode className="navbar_icons-box-icon" />
              )}
            </div>

            {/* menu  */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <div
                className="menu navbar_icons-box"
                onClick={() => setOpenMenu(true)}
              >
                <Menu className="navbar_icons-box-icon" />
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
        <SideBar setOpenMenu={setOpenMenu} />
      </Drawer>
    </header>
  );
}
