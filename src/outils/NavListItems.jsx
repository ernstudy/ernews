import {
  Airplay,
  Business,
  Cast,
  HealthAndSafety,
  Home,
  NotificationAdd,
  Notifications,
  NotificationsNone,
  PeopleAlt,
  Policy,
  Public,
  School,
  Science,
  SportsEsports,
  SportsHandball,
} from "@mui/icons-material";

import React, { useContext, useState } from "react";
import { NewsContext } from "../context/NewsContext";

export default function NavListItems({ setOpenMenu }) {
  const { userPreferences, setUserPreferences } = useContext(NewsContext);
  const [activeItem, setActiveItem] = useState(false);
  const [isID, setIsID] = useState(null);

  // nav list items
  const listItems = [
    {
      text: "General",
      icon: <Notifications />,
    },
    {
      text: "Sports",
      icon: <SportsHandball />,
    },

    {
      text: "World",
      icon: <Public />,
    },
    {
      text: "Business",
      icon: <Business />,
    },
    {
      text: "Nation",
      icon: <PeopleAlt />,
    },
    {
      text: "Entertainment",
      icon: <SportsEsports />,
    },
    {
      text: "Technology",
      icon: <Cast />,
    },
    {
      text: "Health",
      icon: <HealthAndSafety />,
    },
    {
      text: "Science",
      icon: <Science />,
    },
  ];

  const handleClick = (e, index) => {
    const text = e.target.textContent.toLowerCase();
    console.log(text);
    // update user preferences
    setUserPreferences((prevPref) => ({
      ...prevPref,
      category: text,
      query: "",
    }));

    // activeItem button
    setActiveItem(!activeItem);
    setIsID(index);

    // hide menu
    setOpenMenu(false);
  };

  return (
    <>
      {listItems.map((item, index) => (
        <button
          className={
            index == isID || userPreferences.category == item.text.toLowerCase()
              ? "nav-list-item active-item"
              : "nav-list-item"
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
