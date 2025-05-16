import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>My Cute Blog 🐰</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/posts">Posts</a>
      </nav>
    </header>
  );
}

export default Header;
