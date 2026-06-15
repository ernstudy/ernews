import { ArrowOutward, Close, Launch } from "@mui/icons-material";
import React from "react";
import ImageNotFound from "../image-notfound/ImageNotFound";
import styles from "./ModalCard.module.css";
import { noAvailableData } from "../../../utils/no-available-data";

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
    },
  );

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setOpenModal(!openModal);
  };
  return (
    <div className={`${styles.modal} ${openModal ? styles.show : ""}`}>
      <div className={styles.container}>
        <div className={styles.close} onClick={closeModal}>
          <Close className={styles.closeIcon} />
        </div>
        <div className={styles.image}>
          <img
            src={modalData?.image ?? noAvailableData.image}
            alt={modalData?.title}
          />
        </div>

        <div className={styles.title}>
          <h2>{modalData?.title || noAvailableData.title}</h2>
        </div>

        <div className={styles.source}>
          <span>Source: {modalData.source?.name || noAvailableData.autor}</span>
          {/* <span>{modalData?.publishedAt}</span> */}
        </div>
        <div className={styles.desc}>
          <p>{modalData?.content || noAvailableData.description}</p>
        </div>
        <div className={styles.button}>
          <a href={modalData?.url} target="_blank" rel="noopener noreferrer">
            Read more
            <ArrowOutward
              className={styles.btnIcon}
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
