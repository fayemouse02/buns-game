import React from "react";
import AvatarCreator from "../Buildabear/Buildabear";
import "./About.css";

function About() {
  return (
    <div className="full-post">
      <h2>Build A Bear 🧁</h2>
      <p>
        Welcome to build a bear! Here you can create your very own bear avatar! 🌸
      </p>
      <AvatarCreator />
    </div>
  );
}

export default About;
