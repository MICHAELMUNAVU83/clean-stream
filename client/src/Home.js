import React from "react";
import NavBar from "./components/NavBar";
import Map from "./components/Map";

function Home({ user, setStoredToken }) {
  
  return (
    <>
      <NavBar user={user} setStoredToken={setStoredToken} />
      <Map user={user} />
    </>
  );
}

export default Home;
