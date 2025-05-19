import React, { useEffect } from "react";
import "./Home.css"; // This should contain your CSS styles
// Optionally import Google Fonts via index.html or CSS

function Home() {
 return (
  <div className="full-post">
     <h2>Home Page 🧁</h2>
  <p>
    Hi! If you're reading this, then you're lucky enough to be on the Bear Blog for super cool bear activities! 🐻✨
    This website is definitely a work in progress, and there’s still so much to do.
  </p>

  <h3>🐾 Bear To-Do List:</h3>
  <ul>
    <li>📋 Add missing recipe details</li>
    <li>📝 Add missing poems</li>
    <li>🧩 Add puzzle section</li>
    <li>🐰 Add Build-a-Bun</li>
    <li>🖼️ Add image wall</li>
  </ul>
  </div>
);
}


export default Home;
