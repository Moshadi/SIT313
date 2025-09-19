import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">DEV@Deakin</h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">New Post</Link></li>

          {!user && <li><Link to="/auth">Login/Register</Link></li>}
          {user && <li><Link to="/signout">Sign Out</Link></li>}

          <li
            className="dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="dropdown-toggle">Other ▾</span>
            {open && (
              <ul className="dropdown-menu">
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            )}
          </li>
        </ul>

        {/* Username on right corner */}
        {user && (
          <div className="user-info">
            👋 {user.displayName || "User"}
          </div>
        )}
      </div>
    </nav>
  );
}
