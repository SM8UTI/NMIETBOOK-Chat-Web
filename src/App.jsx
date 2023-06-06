import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Outlet />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ fontSize: "0.9rem"}}
      />
    </>
  );
};

export default App;
