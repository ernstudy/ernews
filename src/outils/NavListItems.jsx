import {
  Home,
  Policy,
  Public,
  School,
  SportsHandball,
} from "@mui/icons-material";

import React, { useContext, useState } from "react";
import { NewsContext } from "../context/NewsContext";

export default function NavListItems() {
  const { setUserPreferences } = useContext(NewsContext);
  const [activeItem, setActiveItem] = useState(false);
  const [isID, setIsID] = useState(null);

  const handleClick = (e, index) => {
    const text = e.target.textContent.toLowerCase();
    console.log(text);
    // update user preferences
    setUserPreferences((prevPref) => ({ ...prevPref, category: text }));

    // activeItem button
    setActiveItem(!activeItem);
    setIsID(index);
  };

  // nav list items
  const listItems = [
    {
      text: "General",
      icon: <Home />,
    },
    {
      text: "Education",
      icon: <School />,
    },
    {
      text: "Sport",
      icon: <SportsHandball />,
    },
    {
      text: "World",
      icon: <Public />,
    },
  ];

  return (
    <>
      {listItems.map((item, index) => (
        <button
          className={
            index == isID ? "nav-list-item active-item" : "nav-list-item"
          }
          onClick={(e) => handleClick(e, index)}
          key={index}
        >
          {/* nav list icons  */}
          <div
            className={
              index == isID ? "custom-icon active-icon" : "custom-icon"
            }
          >
            {item.icon}
          </div>

          {/* nav list text  */}
          {item.text}
        </button>
      ))}
    </>
  );
}
