import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Explore from "./pages/explore/Explore";
import Messages from "./pages/messages/Messages";
import Reels from "./pages/reels/Reels";
import Profile from "./pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "explore",
    element: <Explore />,
  },
  {
    path: "reels",
    element: <Reels />,
  },
  {
    path: "messages",
    element: <Messages />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
