import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SignOut() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("👋 You have been signed out successfully.");
      navigate("/auth"); // redirect back to login/register
    } catch (error) {
      console.error("Error signing out:", error);
      alert("⚠️ Failed to sign out. Please try again.");
    }
  };

  // 🔹 If user is NOT logged in → redirect immediately
  if (!user) {
    navigate("/auth");
    return null;
  }

  return (
    <div className="signout-container">
      <div className="signout-card">
        <h2>Sign Out</h2>
        <p>Are you sure you want to leave?</p>
        <button onClick={handleSignOut} className="signout-btn">
          Sign Out
        </button>
      </div>
    </div>
  );
}
