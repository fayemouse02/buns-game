import React from "react";
import "./Postcard.css";

function PostCard({ title, content, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default PostCard;
