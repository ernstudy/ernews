import {
  Home,
  Policy,
  Public,
  School,
  SportsHandball,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";

export default function NavListItems() {
  const [activeItem, setActiveItem] = useState(false);
  const [isID, setIsID] = useState(null);

  const handleActive = (index) => {
    setActiveItem(!activeItem);
    setIsID(index);
  };
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
          onClick={() => handleActive(index)}
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
