import { BrokenImage } from "@mui/icons-material";
import { light } from "@mui/material/styles/createPalette";
import { useContext } from "react";
import { NewsContext } from "../../../context/NewsContext";

export default function ImageNotFound() {
  const { theme } = useContext(NewsContext);
  console.log("theme", theme);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <BrokenImage
        fontSize="large"
        sx={{
          placeSelf: "center",
          color: theme == "dark" ? "#fff" : "#000",
        }}
      />
    </div>
  );
}
