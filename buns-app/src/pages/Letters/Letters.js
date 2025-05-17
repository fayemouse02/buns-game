import React, { useState } from "react";
import PostCard from "../Postcard/Postcard";
import "./Letters.css";

const posts = [
  {
    id: 1,
    title: "Letter 1",
    image: "letter.png",
    content: "Open when you are sad",
    full: <p>TODO</p>,
  },
  {
    id: 2,
    title: "2",
    image: "letter.png",
    content: "TODO",
    full: "TODO",
  },
  {
    id: 3,
    title: "3",
    image: "letter.png",
    content: "TODO",
    full: "TODO",
  },
];

const affirmations = [
  "You are enough, just as you are 💖",
  "You are allowed to take up space 🌷",
  "You bring kindness to the world 🌎",
  "It’s okay to move slowly 🐢",
  "You are worthy of rest and peace 🛏️",
  "You have a gentle strength inside you 🐻",
  "The world is better with you in it 🌟",
  "You are someone’s safe place 🏡",
  "Softness is not weakness 🍥",
  "Every day is a fresh start 🌅",
  "You are growing in ways you can’t yet see 🌱",
  "You are not behind — you are on your own path 🚶‍♀️",
  "You bring warmth to cold spaces 🔥",
  "It’s okay to ask for help 🤝",
  "Your feelings are valid and real 💌",
  "You deserve love and understanding 💞",
  "Your joy matters 🧁",
  "You don’t have to be perfect to be loved 🎀",
  "There’s no rush — healing takes time 🧸",
  "You make the world a little brighter ✨",
  "You are doing your best, and that’s enough 🌼",
  "You are allowed to rest without guilt 🌙",
  "You are a whole person, even on hard days ☁️",
  "Tiny steps are still progress 🐾",
  "You are allowed to outgrow people and places 🌻",
  "Your dreams are valid 🎨",
  "You have survived 100% of your hardest days 💪",
  "You are a light in someone’s life 🕯️",
  "You bring calm to the chaos 🌊",
  "There is nothing wrong with needing comfort 🧦",
  "Your presence matters 💗",
  "You are enough, even when you do nothing 💤",
  "You carry magic in your heart 🎇",
  "Your voice deserves to be heard 🎤",
  "It’s okay to change your mind 🍃",
  "You are not too much 🌸",
  "There’s strength in gentleness 🍯",
  "You are exactly where you need to be 🗺️",
  "You are lovable, always 🧸",
  "You are never too far from home 🏠",
  "You shine even on cloudy days ☁️✨",
  "You bring sweetness to the world 🍓",
  "Your light can’t be dimmed ✨",
  "It’s okay to be a work in progress 💐",
  "You are more than your mistakes 🍂",
  "You are allowed to bloom at your own pace 🌼",
  "Someone is grateful you exist 💌",
  "There is softness in strength 🌙",
  "Your kindness is a gift 🎁",
  "You are never alone 🌟",
  "Your story matters 📖"
];


function Letters() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleBack = () => setSelectedPost(null);

  // Get a daily affirmation based on the day of the month
  const today = new Date().getDate();
  const affirmation = affirmations[today % affirmations.length];

  if (selectedPost) {
    return (
      <div className="full-post">
        <button className="back-button" onClick={handleBack}>← Back</button>
        <h2>{selectedPost.title}</h2>
        {selectedPost.full}
      </div>
    );
  }

  return (
    <div className="letters-wrapper">
      <div className="affirmation-box">
        <h3>Today's affirmation:</h3>
        {affirmation}
      </div>

      <div className="container">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            image={post.image}
            onClick={() => setSelectedPost(post)}
          />
        ))}
      </div>
    </div>
  );
}

export default Letters;
