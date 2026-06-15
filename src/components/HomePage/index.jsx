import { Container } from "@mui/material";
import React, { useState } from "react";
import HeaderComponent from "../HeaderComponent";
import HorizontalCard from "../ui/HorizontalCard";
import BigCard from "../ui/BigCard";
import SmallCard from "../ui/SmallCard";
import VerticalCard from "../ui/VerticalCard";
import MainCard from "../ui/MainCard";
import ModalCard from "../ui/ModalCard";
import FooterComponent from "../FooterComponent";
import HomeLayout from "./HomeLayout";

export default function HomePage() {
  // modal data
  const [modalData, setModalData] = useState([]);
  // modal fonctionallity
  const [openModal, setOpenModal] = useState(false);
  const showModal = (cardData) => {
    setOpenModal(!openModal);
    document.body.style.overflow = "hidden";

    if (!cardData) return setModalData([]);
    // modal data
    setModalData(cardData);
    console.log("card data:", cardData);
  };
  return (
    <Container maxWidth="md">
      <HomeLayout
        showModal={showModal}
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalData={modalData}
      />
    </Container>
  );
}
