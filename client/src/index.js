import React from "react";
import Navbar from './components/Navbar'
import Login from "./routes/Login";
import Feed from "./routes/Feed"
import Products from "./routes/Messages";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
import Messages from "./routes/Messages";
import SignOut from "./routes/SignOut";
const AppLayout = () => (
  <>
  <Navbar/>
  <Outlet/>
  </>
);


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
    path: "/",
    element: <Feed />

  },
  {
    path: "messages",
    element: <Messages/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "signout",
    element: <SignOut/>
  }

    ]
  }

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,

);
