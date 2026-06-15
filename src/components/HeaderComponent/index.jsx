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
import LogoApp from "../ui/LogoApp";
import { Box, Drawer } from "@mui/material";
import SearchBar from "../ui/SearchBar";
import SideBar from "../SideBar";
import styles from "./HeaderComponent.module.css";
import { NewsContext } from "../../context/NewsContext";

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
      <div className={styles.header}>
        <Box sx={{ display: { xs: "flex", md: "none" }, justifySelf: "start" }}>
          <LogoApp />
        </Box>

        <nav className={styles.nav}>
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
          <div className={styles.icons}>
            <div
              className={styles.langSelector}
              onClick={() => setIsClicked(!isClicked)}
            >
              <div className={`${styles.langItem} ${styles.navBox}`}>
                {userPreferences.language}
                <ArrowDropDown className={styles.navBoxIcon} />
              </div>

              <div
                className={styles.options}
                style={{ display: isClicked ? "flex" : "none" }}
              >
                {languages.map((language, idx) => (
                  <span
                    key={idx}
                    onClick={() => selectLanguage(language.code, idx)}
                    className={
                      isID == idx || userPreferences.language == language.code
                        ? styles.selected
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
              className={`${styles.mode} ${styles.navBox}`}
              onClick={toggleTheme}
            >
              {theme == "light" ? (
                <ModeNightSharp className={styles.navBoxIcon} />
              ) : (
                <LightMode className={styles.navBoxIcon} />
              )}
            </div>

            {/* menu  */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <div
                className={`${styles.menu} ${styles.navBox}`}
                onClick={() => setOpenMenu(true)}
              >
                <Menu className={styles.navBoxIcon} />
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
