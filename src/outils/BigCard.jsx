import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

export default function BigCard({ props }) {
  const { news } = useContext(NewsContext);
  const cardData = news[4];

  const { showModal } = props;

  const handleClick = () => {
    showModal(cardData);
  };

  return (
    <div className="big_card" onClick={handleClick}>
      <div className="big_card-image">
        <img src={cardData?.image} alt={cardData?.title} />
      </div>
      <div className="big_card-title">
        <h2>{cardData?.title}</h2>
        <div className="big_card-description">
          <p>{cardData?.description}</p>
        </div>
      </div>
    </div>
  );
}
