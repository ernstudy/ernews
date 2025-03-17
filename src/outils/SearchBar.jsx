import { Search } from "@mui/icons-material";
import React from "react";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <Search className="search-icon" fontSize="medium" />
      <input type="text" placeholder="Search" />
    </div>
  );
}
