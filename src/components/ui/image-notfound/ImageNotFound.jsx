import { BrokenImage } from "@mui/icons-material";

export default function ImageNotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <BrokenImage fontSize="large" sx={{ placeSelf: "center" }} />
    </div>
  );
}
