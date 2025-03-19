import React from "react";

export default function MainCard({ props }) {
  const { showModal } = props;

  return (
    <div className="main_card" onClick={() => showModal()}>
      <span className="tag-name">Featured</span>
      <div className="main_card-title">
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id iusto
          tenetur tempore qui molestias cupiditate?
        </h2>
      </div>
    </div>
  );
}
