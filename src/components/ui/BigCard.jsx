import React, { useContext } from "react";
import { NewsContext } from "../../context/NewsContext";
import ImageNotFound from "./image-notfound/ImageNotFound";
import { noAvailableData } from "../../utils/no-available-data";

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
        {cardData ? (
          <img
            src={cardData?.image}
            alt={cardData?.title ?? noAvailableData.label}
          />
        ) : (
          <ImageNotFound />
        )}
      </div>
      <div className="big_card-title">
        {cardData ? (
          <h2>{cardData?.title}</h2>
        ) : (
          <h2>{noAvailableData.title}</h2>
        )}
        <div className="big_card-description">
          {cardData ? (
            <p>{cardData?.description}</p>
          ) : (
            <p>{noAvailableData.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
