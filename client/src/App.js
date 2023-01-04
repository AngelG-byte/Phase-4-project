import React,{ useState } from "react"
import { SidebarData } from "./components/SidebarData"
import Messages from "./routes/Messages"
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Login from "./routes/Login";
import Feed from "./routes/Feed"
import SignOut from "./routes/SignOut";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";

export default function App(){
const [user, setUser] = useState([])
console.log(user)
  const AppLayout = () => (
  <>
  <Navbar user={user}/>
  <Outlet/>
  </>
);
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Feed user={user} />}/>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/messages" element={<Messages />}/>
        </Route>
      ))
    return(
        <>
        <RouterProvider router={router}/>
        </>
  )
}
