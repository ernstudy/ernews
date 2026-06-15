import { Box } from "@mui/material";
import React from "react";
import NavListItems from "./ui/NavListItems";
import LogoApp from "./ui/LogoApp";
import styles from "./SideBar.module.css";

export default function SideBar({ setOpenMenu }) {
  return (
    <div className="side-bar">
      <LogoApp />
      <div className="nav-list">
        <NavListItems setOpenMenu={setOpenMenu} />
      </div>
    </div>
  );
}
