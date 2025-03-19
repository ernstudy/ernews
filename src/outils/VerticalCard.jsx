import React from "react";

export default function VerticalCard({ props }) {
  // const { showModal } = props;
  return (
    <div className="vertical_cards" onClick={() => showModal()}>
      <div className="vertical_cards-image"></div>
      <div className="vertical_cards-title">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
      </div>
    </div>
  );
}
