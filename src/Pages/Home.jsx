import React from "react";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";

const Home = () => {
  return (
    <div className="Home min-h-screen grid content-center p-4">
      <div className="container bg-white mx-auto flex min-h-[90vh] rounded-md overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
