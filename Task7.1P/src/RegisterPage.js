// src/RegisterPage.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import "./App.css";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    setErrorMsg("");

    if (!firstName || !lastName || !email || !password || !confirmPass) {
      setErrorMsg("All fields are required.");
      return;
    }

    if (password !== confirmPass) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCred.user.uid), {
        firstName,
        lastName,
        email
      });
      alert("Account created! Please login.");
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMsg("Email is already registered.");
      } else if (error.code === "auth/invalid-email") {
        setErrorMsg("Invalid email address.");
      } else if (error.code === "auth/weak-password") {
        setErrorMsg("Password should be at least 6 characters.");
      } else {
        setErrorMsg("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Create a DEV@Deakin Account</h2>
      {errorMsg && <p className="error">{errorMsg}</p>}
      <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
      <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPass(e.target.value)} />
      <button onClick={handleRegister}>Create</button>
      <p>Already registered? <Link to="/">Login</Link></p>
    </div>
  );
}

export default RegisterPage;
