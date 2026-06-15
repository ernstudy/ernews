import React, { useContext } from "react";
import { NewsContext } from "../../../context/NewsContext";
import styles from "./VerticalCard.module.css";

export default function VerticalCard({ props }) {
  const { news } = useContext(NewsContext);
  const selectedData = news.slice(1, 4);
  const { showModal } = props;

  const handleClick = (data) => {
    showModal(data);
  };
  return (
    <>
      {selectedData.map((data, idx) => (
        <div
          className={styles.root}
          onClick={() => handleClick(data)}
          key={idx}
        >
          <div className={styles.img}>
            <img src={data.image} alt={data.title} />
          </div>
          <div className={styles.title}>
            <h2>{data.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
