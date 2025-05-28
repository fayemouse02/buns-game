import React, { useState, useEffect } from "react";
import PostCard from "../Postcard/Postcard";
import "./Essays.css";

const posts = [
  {
    id: 1,
    title: "Does the right always win?",
    image: "notebook.png",
    content: "The obligation to debate",
    file: 'essays/right_always_win.txt'
  },
  {
    id: 2,
    title: "Open The Exhaustion of Existence",
    image: "notebook.png",
    content: "An atheist lesbian’s reflection on debating biblical morality",
    file: 'essays/tired_of_religion.txt'
  },
  {
    id: 3,
    title: "Right-Wing Debate Media",
    image: "notebook.png",
    content: "A genre of pornography?",
    file: 'essays/rightwing_fet_content.txt'
  },
  
];





function Essays() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [fullText, setFullText] = useState("");

  useEffect(() => {
    if (selectedPost) {
      fetch(selectedPost.file)
        .then((res) => res.text())
        .then((text) => setFullText(text));
    }
  }, [selectedPost]);

  const handleBack = () => {
    setSelectedPost(null);
    setFullText("");
  };

  if (selectedPost) {
    return (
      <div className="full-post">
        <button className="back-button" onClick={handleBack}>← Back</button>
        <h2>{selectedPost.title}</h2>
        {fullText
          .split("\n")
          .filter(line => line.trim() !== "")
          .map((line, index) => <p key={index}>{line}</p>)}
      </div>
    );
  }

  return (
    <div className="letters-wrapper">
      <div className="affirmation-box">
         <h3>This section gives a glimpse into a bear's very busy mind</h3>
         <p>This part is mainly here because I wanted somewhere to put my thoughts, but I figured maybe you might want to read some tism stuff if you're bored.</p>
         <p>Lots of these essays are just things I think about, so they might be philosophical, political etc - who knows!</p>
         <p>I can't guarentee that the subjects will be particularly positive, but hopefully them being here will give me an excuse to write and get the thoughts out.</p>
         <p>If you're interested in a topic I am always happy to yap to you about it :)</p>
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

export default Essays;

