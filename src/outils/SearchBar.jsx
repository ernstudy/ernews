import { Search } from "@mui/icons-material";
import React from "react";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <button className="search-btn">Search</button>
      <input type="text" placeholder="Search" />
    </div>
  );
}
