import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";

export default function HorizontalCard({ props }) {
  const { news } = useContext(NewsContext);

  const selectedData = news.slice(8, 10);

  const { showModal } = props;

  const handleClick = (data) => {
    showModal(data);
  };

  return (
    <>
      {selectedData.map((data, idx) => (
        <div
          className="horizontal_card"
          onClick={() => handleClick(data)}
          key={idx}
        >
          <div className="horizontal_card-image">
            <img src={data?.image} alt={data?.title} />
          </div>
          <div className="horizontal_card-title">
            <h2>{data?.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
