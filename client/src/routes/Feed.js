import React from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Feed() {
  function handleAlert(e){
    toast.info('Please make me work', {
position: "top-center",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
  }
  return (
    <div className="home">
      <h1>Feed</h1>
      <button onClick={handleAlert}>Press me</button>
      < ToastContainer
      position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored" />
    </div>
  );
}

export default Feed;
