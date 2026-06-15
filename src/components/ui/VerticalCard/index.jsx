import React, { useContext } from "react";
import { NewsContext } from "../../../context/NewsContext";
import styles from "./VerticalCard.module.css";
import ImageNotFound from "../image-notfound/ImageNotFound";
import { noAvailableData } from "../../../utils/no-available-data";

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
            <img
              src={data?.image ?? noAvailableData.image}
              alt={data.title ?? noAvailableData.title}
            />
          </div>
          <div className={styles.title}>
            <h2>{data.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
