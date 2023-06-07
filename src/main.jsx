import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Home from "./Pages/Home.jsx";
import { Provider } from "react-redux";
import Store from "./Store/Store.jsx";
import PrivateRouter from "./Router/PrivateRouter.jsx";
import { Toaster } from "react-hot-toast";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={AppRouter} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ fontSize: "0.9rem", zIndex: "999999" }}
      />
    </Provider>
  </React.StrictMode>
);
