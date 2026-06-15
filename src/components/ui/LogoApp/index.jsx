import { Feed, Newspaper } from "@mui/icons-material";
import React from "react";
import styles from "./LogoApp.module.css";

export default function LogoApp() {
  return (
    <div className={styles.root}>
      <Feed className={styles.icon} />
      <h1>ERNews</h1>
    </div>
  );
}
