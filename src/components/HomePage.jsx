import { Container } from "@mui/material";
import React, { useState } from "react";
import HeaderComponent from "./HeaderComponent";
import HorizontalCard from "../outils/HorizontalCard";
import BigCard from "../outils/BigCard";
import SmallCard from "../outils/SmallCard";
import VerticalCard from "../outils/VerticalCard";
import MainCard from "../outils/MainCard";
import ModalCard from "../outils/ModalCard";
import FooterComponent from "./FooterComponent";

export default function HomePage() {
  // modal data
  const [modalData, setModalData] = useState([]);
  // modal fonctionallity
  const [openModal, setOpenModal] = useState(false);
  const showModal = (cardData) => {
    setOpenModal(!openModal);
    document.body.style.overflow = "hidden";

    // modal data
    setModalData(cardData);
    console.log("card data:", cardData);
  };
  return (
    <Container maxWidth="md">
      <HeaderComponent />

      {/* main card component  */}
      <section className="main_card_section">
        <MainCard props={{ showModal }} />
      </section>

      {/* Vertical card component */}
      <section className="vertical_card_section space">
        <div className="vertical_card_section-title">
          <h3>For you</h3>
        </div>
        <div className="vertical_card_container">
          <VerticalCard props={{ showModal }} />
        </div>
      </section>

      {/* Big and small card component */}
      <section className="big_sm_card_section space">
        <div className="big_small_card_section-title">
          <h3>Recommended News</h3>
        </div>

        <div className="big_small_card_container">
          <BigCard props={{ showModal }} />
          <div className="small_card_container">
            <SmallCard props={{ showModal }} />
          </div>
        </div>
      </section>

      {/* Horizontal card component */}
      <section className="horizontal_card_section space">
        <div className="horizontal_card_section-title">
          <h3>More news</h3>
        </div>
        <div className="horizontal_card_container">
          <HorizontalCard props={{ showModal }} />
        </div>
      </section>

      {/* modal component  */}
      <ModalCard props={{ openModal, setOpenModal, modalData }} />

      {/* footer component */}
      <>
        <FooterComponent />
      </>
    </Container>
  );
}
