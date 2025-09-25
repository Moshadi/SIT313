import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import PostForm from "./components/PostForm";   
import PostList from "./components/PostList";  
import Auth from "./components/Auth";
import SignOut from "./components/SignOut";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Posts */}
        <Route path="/posts" element={<PostList />} />   {/* Find Question page */}
        <Route path="/new" element={<PostForm />} />     {/* Create Post page */}

        {/* Auth */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </Router>
  );
}

export default App;
