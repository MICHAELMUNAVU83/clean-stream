import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import LandingPage from "./components/LandingPage";

function App() {

  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    console.log(storedToken);
  }, [storedToken]);
 
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (storedToken) {
      fetch("/api/v1/profile", {
        method: "GET",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((r) => r.json())
        .then((data) => setUser(data.user));
    }
  }, [storedToken]);

  return (
    <>
      <div>
      <Router>
        <Routes>
          {storedToken ? (
            <Route
              path="/"
              element={<Home user={user} setStoredToken={setStoredToken} />}
            />
          ) : (
            <Route
              path="/"
              element={<SignUp setStoredToken={setStoredToken} />}
            />
          )}
          <Route
            path="/login"
            element={<Login setStoredToken={setStoredToken} />}
          />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
