import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import NewPost from "./components/NewPost";
import Auth from "./components/Auth";
import SignOut from "./components/SignOut"; // you already have this

<Route path="/auth" element={<Auth />} />

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </Router>
  );
}

export default App;
