import React from "react";
import styles from "./CopyRIght.module.css";

export default function CopyRIght() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.root}>
      <h4>
        &copy; {year}, ERNews | Designed by{" "}
        <a href="https://ernstudy.com">Ernstudy</a>
      </h4>
    </div>
  );
}
