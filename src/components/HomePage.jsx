import { Container } from "@mui/material";
import React from "react";
import HeaderComponent from "./HeaderComponent";
import Featured from "./Featured";

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <HeaderComponent />
      <Featured />
    </Container>
  );
}
