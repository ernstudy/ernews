import { Close, Launch } from "@mui/icons-material";
import React from "react";

export default function ModalCard({ props }) {
  const { openModal, setOpenModal, modalData } = props;

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setOpenModal(!openModal);
  };
  return (
    <div className={openModal ? "modal show-modal" : "modal"}>
      <div className="modal-container">
        <div className="modal-close" onClick={closeModal}>
          <Close className="modal-close-icon" />
        </div>
        <div className="modal-image">
          <img src={modalData?.image} alt={modalData?.title} />
        </div>

        <div className="modal-title">
          <h2>{modalData?.title}</h2>
        </div>
        <div className="modal-description">
          <p>{modalData?.description}</p>
        </div>
        <div className="modal-button">
          <button>
            Read more <Launch sx={{ verticalAlign: "middle" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
