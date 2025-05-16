import React, { useState } from "react";
import PostCard from "../Postcard/Postcard";
import "./Posts.css";

const posts = [
  {
    id: 1,
    title: "Fluffy Adventures",
    content: "Follow my bunny through her garden adventures. 🌸",
    full: "Today Fluffy discovered a secret burrow full of dandelions! 🐇💐 It was adorable and magical.",
  },
  {
    id: 2,
    title: "Baking Day",
    content: "Cookies, cupcakes and all things sweet and pink! 🍰",
    full: "I spent the day baking strawberry cupcakes with pink frosting. Here's my recipe... 🍓🧁",
  },
  {
    id: 3,
    title: "Rainy Day Reads",
    content: "Perfect books to cuddle up with. ☔📚",
    full: "Rainy days are best with a warm blanket and a fantasy novel. My picks are listed here...",
  },
  {
    id: 4,
    title: "Fluffy Adventures",
    content: "Follow my bunny through her garden adventures. 🌸",
    full: "Today Fluffy discovered a secret burrow full of dandelions! 🐇💐 It was adorable and magical.",
  },
  {
    id: 5,
    title: "Baking Day",
    content: "Cookies, cupcakes and all things sweet and pink! 🍰",
    full: "I spent the day baking strawberry cupcakes with pink frosting. Here's my recipe... 🍓🧁",
  },
  {
    id: 6,
    title: "Rainy Day Reads",
    content: "Perfect books to cuddle up with. ☔📚",
    full: "Rainy days are best with a warm blanket and a fantasy novel. My picks are listed here...",
  },
  {
    id: 7,
    title: "Fluffy Adventures",
    content: "Follow my bunny through her garden adventures. 🌸",
    full: "Today Fluffy discovered a secret burrow full of dandelions! 🐇💐 It was adorable and magical.",
  },
];

function Posts() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleBack = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className="full-post">
        <button className="back-button" onClick={handleBack}>← Back</button>
        <h2>{selectedPost.title}</h2>
        <p>{selectedPost.full}</p>
      </div>
    );
  }

  return (
    <div className="container">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          onClick={() => setSelectedPost(post)}
        />
      ))}
    </div>
  );
}

export default Posts;

