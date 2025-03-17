import { Box } from "@mui/material";
import React from "react";
import NavListItems from "../outils/NavListItems";
import LogoApp from "../outils/LogoApp";

export default function SideBar() {
  return (
    <div className="side-bar">
      <LogoApp />
      <div className="nav-list">
        <NavListItems />
      </div>
    </div>
  );
}
