import React, { useState } from "react";
import PostCard from "../Postcard/Postcard";
import "./Posts.css";

const posts = [
    {
        id: 1,
        title: "Home Away From Home",
        content: (
            <div>
                <h3>13/05/2025</h3>
                <p> A short love letter for when the distance seems long.</p>
            </div>
            
        ),
        full: (
          <div className="formatted-post">
            <p>I know your home is far away—<br />
            different air and different streets—<br />
            and I can imagine that sometimes you feel like you’re split between worlds.</p>
      
            <p>And every time I miss you, I remind myself<br />
            that missing you means loving you in motion.<br />
            Loving you with patience. With hope for the future.</p>
      
            <p>So that even when you're not here, you're here.<br />
            In every plan I make with a "someday" attached.<br />
            In the shows I want to watch with you, the songs that sound like us,<br />
            and the life I keep building around the shape of your name.</p>
      
            <p>Your home may be miles away, but a part of it lives here too—<br />
            tucked in quiet corners, echoed in my laughter,<br />
            waiting in the spaces I’ve saved just for you.</p>
      
            <p>No matter the miles, you’re never far from where you belong—<br />
            and that as long as I'm here,<br />
            you will never be alone in your corner of the world.</p>
      
            <p>I hope when the night gets long and quiet over there,<br />
            you can feel that your heart has another home.<br />
            Right here. With me.</p>
          </div>
        ),
      },
      
  {
    id: 2,
    title: "Poem2",
    content: "TODO",
    full: "TODO",
  },
  {
    id: 3,
    title: "Poem3",
    content: "TODO",
    full: "TODO",
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
        {selectedPost.full}
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

