import React, { useEffect } from "react";
import "./Home.css"; // This should contain your CSS styles
// Optionally import Google Fonts via index.html or CSS

function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        alert(`You clicked on "${card.querySelector("h2").textContent}" 💖`);
      });
    });

    // Optional cleanup if needed
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <h1>This is the home page 🐰</h1>
  );
}

export default Home;
