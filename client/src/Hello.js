import React from "react";
import NavBar from "./components/NavBar";

function Hello({ user, setUser }) {
  
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      Hello {user? user.username : "Guest"}!
    </>
  );
}

export default Hello;
