import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Feed({user}) {
  // useEffect


  return (
    <div className="home">
      <h1>Welcome {user.username}</h1>
</div>
  );
}

export default Feed;
