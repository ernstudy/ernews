import { Close, Launch } from "@mui/icons-material";
import React from "react";

export default function ModalCard({ props }) {
  const { openModal, setOpenModal } = props;

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
        <div className="modal-image"></div>

        <div className="modal-title">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            necessitatibus.
          </h2>
        </div>
        <div className="modal-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            perferendis soluta laboriosam unde hic et deserunt exercitationem ut
            suscipit quae?
          </p>
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
