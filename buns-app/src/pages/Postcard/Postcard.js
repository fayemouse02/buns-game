import React from "react";
import "./Postcard.css";

function PostCard({ title, content, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
        {image && <img src={image} alt={title} className="card-image" />}
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default PostCard;
