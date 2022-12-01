import React from "react";
import NavBar from "./components/NavBar";
import MapBox from "./components/MapBox";

function Home({ user, setStoredToken }) {
  
  return (
    <>
      <NavBar user={user} setStoredToken={setStoredToken} />
      <MapBox user={user} />
    </>
  );
}

export default Home;
