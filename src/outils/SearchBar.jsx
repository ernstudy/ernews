import { Search } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { NewsContext } from "../context/NewsContext";

export default function SearchBar() {
  const { setUserPreferences } = useContext(NewsContext);
  const [value, setValue] = useState("");

  const handleChange = (text) => {
    setValue(text);
  };

  const handleSubmit = () => {
    if (!value.trim()) return;

    setUserPreferences((prevPref) => ({
      ...prevPref,
      query: value,
      category: "general",
    }));
  };

  return (
    <div className="search-bar">
      <button className="search-btn" onClick={handleSubmit}>
        Search
      </button>
      <input
        type="text"
        placeholder="Search for the latest news"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            handleSubmit();
          }
        }}
      />
    </div>
  );
}
