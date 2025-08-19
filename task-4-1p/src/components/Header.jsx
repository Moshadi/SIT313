import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">DEV@Deakin</div>
        <nav className="nav">
          <a href="#articles">Articles</a>
          <a href="#tutorials">Tutorials</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}
