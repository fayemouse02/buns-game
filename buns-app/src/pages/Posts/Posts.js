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
    title: "Birthday bun",
    content: (
        <div>
          <h3>24/05/2025</h3>
          <p> A little poem for a bun's special day.</p>
        </div>
            ),
    full: (
      <div>
        <p>Today is the day the world got lucky.</p>
        <p>The day you arrived — full of quiet magic you didn’t yet know you carried.</p>
        <br></br>
        <p>I think about how many versions of me</p>
        <p>you’ve met along the way —</p>
        <p>the sleepy mornings, the worried nights,</p>
        <p>the messy, the silly, the small.</p>
        <p>And how somehow, through all of it,</p>
        <p>you’ve stayed.</p>
        <br></br>
        <p>Bun,</p>
        <p>you are the most gentle truth I know.</p>
        <p>You remind me that love need not be grand gestures —</p>
        <p>it’s how you hold my hand without a word,</p>
        <p>the way you listen when I don’t even know what I’m trying to say,</p>
        <p>how you choose softness in a world that often asks for armor.</p>
        <br></br>
        <p>On your birthday,</p>
        <p>I want to tell you this:</p>
        <p>You are not just loved.</p>
        <p>You are <em>treasured</em>.</p>
        <p>The kind of loved that wraps itself around your shoulders</p>
        <p>when you’re too tired to be strong.</p>
        <p>The kind that believes in your quiet dreams,</p>
        <p>even the ones you whisper only once.</p>
        <br></br>
        <p>You are more than I ever thought I’d be lucky enough to hold.</p>
        <p>And still — here you are.</p>
        <br></br>
        <p>I love you, Bun.</p>
        <p>All of you, exactly as you are,</p>
        <p>in every version,</p>
        <p>today and always.</p>
        <br></br>
        <p>Happy Birthday,</p>
        <p>forever yours,</p>
        <p><strong>Bear 🐻❤️🐰</strong></p>

      </div>
    ),
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
    {[...posts].reverse().map((post) => (
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

