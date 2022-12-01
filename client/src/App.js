import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./Hello";
import Login from "./Login";
import LandingPage from "./components/LandingPage";

function App() {
 
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("/api/v1/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => setUser(user));
    }
  }, []);



  



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage user={user} setUser={setUser} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/hello" element={<Hello user={user} setUser={setUser} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
