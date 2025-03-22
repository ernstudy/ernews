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
        {cardData ? (
          <h2>{cardData?.title}</h2>
        ) : (
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            pariatur.
          </h2>
        )}
        <div className="big_card-description">
          {cardData ? (
            <p>{cardData?.description}</p>
          ) : (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto fuga assumenda incidunt aperiam non!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
