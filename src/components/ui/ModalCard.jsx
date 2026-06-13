import { ArrowOutward, Close, Launch } from "@mui/icons-material";
import React from "react";

export default function ModalCard({ props }) {
  const { openModal, setOpenModal, modalData } = props;

  const publicationDate = new Date(modalData.publishedAt).toLocaleString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );

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
          <h2>{modalData?.title || "Title"}</h2>
        </div>

        <div className="modal-source">
          <span>Source: {modalData.source?.name}</span>
          {/* <span>{modalData?.publishedAt}</span> */}
        </div>
        <div className="modal-description">
          <p>{modalData?.content || "Description"}</p>
        </div>
        <div className="modal-button">
          <a href={modalData?.url} target="_blank" rel="noopener noreferrer">
            Read more
            <ArrowOutward
              className="modal-button-icon"
              fontSize="medium"
              sx={{
                verticalAlign: "middle",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
