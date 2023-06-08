import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import ChatsProfile from "./ChatsProfile";

const Sidebar = ({ sideBarModal }) => {
  return (
    <div
      className={`Sidebar transition-all duration-600 ease-in-out  ${
        sideBarModal ? "p-4 w-[100%] sm:w-[40%] md:w-[30%]" : "p-0 w-[0%]"
      } sm:flex flex-col overflow-hidden`}
    >
      <NavBar />
      <Search />
      <ChatsProfile />
    </div>
  );
};

export default Sidebar;
