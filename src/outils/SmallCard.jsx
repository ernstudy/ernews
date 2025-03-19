import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

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
        <div className="small_card" key={idx} onClick={() => handleClick(data)}>
          <div className="small_card-image">
            <img src={data?.image} alt={data?.title} />
          </div>
          <div className="small_card-title">
            <h2>{data?.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
