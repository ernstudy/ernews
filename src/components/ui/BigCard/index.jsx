import React, { useContext } from "react";
import { NewsContext } from "../../../context/NewsContext";
import ImageNotFound from "../image-notfound/ImageNotFound";
import { noAvailableData } from "../../../utils/no-available-data";
import styles from "./BigCard.module.css";

export default function BigCard({ props }) {
  const { news } = useContext(NewsContext);
  const cardData = news[4];

  const { showModal } = props;

  const handleClick = () => {
    showModal(cardData);
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      <div className={styles.img}>
        {cardData ? (
          <img
            src={cardData?.image}
            alt={cardData?.title ?? noAvailableData.label}
          />
        ) : (
          <ImageNotFound />
        )}
      </div>
      <div className={styles.title}>
        {cardData ? (
          <h2>{cardData?.title}</h2>
        ) : (
          <h2>{noAvailableData.title}</h2>
        )}
        <div className={styles.desc}>
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
