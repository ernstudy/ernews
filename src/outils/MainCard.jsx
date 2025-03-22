import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

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
      style={{ backgroundImage: `url(${mainCardData?.image})` }}
    >
      <span className="tag-name">Featured</span>
      <div className="main_card-title">
        {mainCardData ? (
          <h2>{mainCardData?.title}</h2>
        ) : (
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            ducimus earum iusto itaque tempora!
          </h2>
        )}
      </div>
    </div>
  );
}
