// src/HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./App.css";


function HomePage() {
  const navigate = useNavigate();

  const logout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>✅ Login Successful</h2>
      <p>Welcome to DEV@Deakin!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default HomePage;
