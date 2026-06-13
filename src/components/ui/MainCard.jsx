import React, { useContext, useState } from "react";
import { NewsContext } from "../../context/NewsContext";
import { BrokenImage } from "@mui/icons-material";
import ImageNotFound from "./image-notfound/ImageNotFound";
import { noAvailableData } from "../../utils/no-available-data";

export default function MainCard({ props }) {
  const { showModal } = props;

  const { news } = useContext(NewsContext);
  const mainCardData = news[0];

  const handleClick = () => {
    showModal(mainCardData);
  };

  return (
    <div
      className="main_card"
      onClick={() => handleClick()}
      style={{
        backgroundImage: `url(${mainCardData?.image || noAvailableData.image})`,
      }}
    >
      <span className="tag-name">Featured</span>

      <div className="main_card-title">
        {mainCardData ? (
          <h2>{mainCardData?.title}</h2>
        ) : (
          <h2>{noAvailableData.title}</h2>
        )}
      </div>
    </div>
  );
}
