import React, { useContext } from "react";
import { NewsContext } from "../../../context/NewsContext";
import styles from "./SmallCard.module.css";

export default function SmallCard({ props }) {
  const { news } = useContext(NewsContext);
  const cardData = news.slice(5, 8);

  const { showModal } = props;

  const handleClick = (data) => {
    showModal(data);
  };

  return (
    <>
      {cardData.map((data, idx) => (
        <div
          className={styles.root}
          key={idx}
          onClick={() => handleClick(data)}
        >
          <div className={styles.img}>
            <img src={data?.image} alt={data?.title} />
          </div>
          <div className={styles.title}>
            <h2>{data?.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
