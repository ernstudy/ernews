import { Container } from "@mui/material";
import React from "react";
import HeaderComponent from "./HeaderComponent";
import HorizontalCard from "../outils/HorizontalCard";
import BigCard from "../outils/BigCard";
import SmallCard from "../outils/SmallCard";
import VerticalCard from "../outils/VerticalCard";
import MainCard from "../outils/MainCard";

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <HeaderComponent />

      {/* main card component  */}
      <section className="main_card_section">
        <MainCard />
      </section>

      {/* Vertical card component */}
      <section className="vertical_card_section space">
        <div className="vertical_card_section-title">
          <h3>For you</h3>
        </div>
        <div className="vertical_card_container">
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </div>
      </section>

      {/* Big and small card component */}
      <section className="big_sm_card_section space">
        <div className="big_small_card_section-title">
          <h3>Recommended News</h3>
        </div>

        <div className="big_small_card_container">
          <BigCard />
          <div className="small_card_container">
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </div>
      </section>

      {/* Horizontal card component */}
      <section className="horizontal_card_section space">
        <div className="horizontal_card_section-title">
          <h3>More news</h3>
        </div>
        <div className="horizontal_card_container">
          <HorizontalCard />
          <HorizontalCard />
        </div>
      </section>
    </Container>
  );
}
