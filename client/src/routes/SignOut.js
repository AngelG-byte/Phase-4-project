import React from "react";
import { Link } from "react-router-dom";

function SignOut({user}) {


  console.log(user)
  return (
    <div className="reports">
      <h1>SignOut</h1>
      {/* <button onClick={handleSignout}>Sign Out</button> */}
    </div>
  );
}

export default SignOut;
