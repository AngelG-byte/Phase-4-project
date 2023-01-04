import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as ioIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
// import {handleSignout} from '../routes/Login'


export const SidebarData = [
  {
    title: "Feed",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <ioIcons.IoLogIn />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
//    {
//      title: "Team",
//     path: "/team",
//     icon: <IoIcons.IoMdPeople />,
//     cName: "nav-text",
//   },
   {
     title: "Sign out",
    path: "",
    icon: <ioIcons.IoLogOut />,
    cName: "nav-text",


  },

];