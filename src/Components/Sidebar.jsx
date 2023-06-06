import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import ChatsProfile from "./ChatsProfile";

const Sidebar = () => {
  return (
    <div className="Sidebar flex-1 p-4">
      <NavBar />
      <Search />
      <ChatsProfile />
    </div>
  );
};

export default Sidebar;
