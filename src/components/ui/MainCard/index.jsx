import React, { useContext, useState } from "react";
import { NewsContext } from "../../../context/NewsContext";
import { BrokenImage } from "@mui/icons-material";
import ImageNotFound from "../image-notfound/ImageNotFound";
import styles from "./MainCard.module.css";
import { noAvailableData } from "../../../utils/no-available-data";

export default function MainCard({ props }) {
  const { showModal } = props;

  const { news } = useContext(NewsContext);
  const mainCardData = news[0];

  const handleClick = () => {
    showModal(mainCardData);
  };

  return (
    <div
      className={styles.root}
      onClick={() => handleClick()}
      style={{
        backgroundImage: `url(${mainCardData?.image || noAvailableData.image})`,
      }}
    >
      <span className={styles.tag}>Featured</span>

      <div className={styles.title}>
        {mainCardData ? (
          <h2>{mainCardData?.title}</h2>
        ) : (
          <h2>{noAvailableData.title}</h2>
        )}
      </div>
    </div>
  );
}
