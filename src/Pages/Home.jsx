import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";
import { useState } from "react";

const Home = () => {
  const [sideBarModal, setSideBarModal] = useState(true);
  return (
    <div className="Home min-h-screen grid content-center p-4">
      <div className="container bg-white mx-auto flex min-h-[90vh] rounded-md overflow-hidden relative">
        <Sidebar sideBarModal={sideBarModal} />
        <Chat sideBarModal={sideBarModal} setSideBarModal={setSideBarModal} />
      </div>
    </div>
  );
};

export default Home;
