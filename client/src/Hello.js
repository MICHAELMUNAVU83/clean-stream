import React from "react";
import NavBar from "./components/NavBar";

function Hello({ user, setStoredToken }) {
  
  return (
    <>
      <NavBar user={user} setStoredToken={setStoredToken} />
     <p>
        {
          user  ? `Hello ${user.username}!` : "Hello Guest!"
        }

     </p>
    </>
  );
}

export default Hello;
