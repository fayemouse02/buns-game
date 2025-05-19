import React, { useState } from "react";
import PostCard from "../Postcard/Postcard";
import "./Letters.css";

const posts = [
  {
    id: 1,
    title: "Open when...",
    image: "letter.png",
    content: "You are feeling sad",
    full: <div>
      <p>Dear bun,</p>
      <p>If you're reading this, I know your heart feels heavy right now. And I want to start by saying — it’s okay. You don’t need to hide your sadness or pretend to be okay for me or anyone else. You're allowed to feel everything you're feeling. Every tear, every ache, every moment where the world feels too loud or too quiet — I want you to know I’m with you in all of it.</p>
      <p>I wish I could wrap my arms around you right now and let you rest your head on my chest. I'd stroke your hair and remind you how strong you are, even when you don’t feel it. Life can feel unfair, overwhelming, or just... dull sometimes. But sadness will never define you. It’s just like a passing cloud, even when it feels like the whole sky.</p>
      <p>You are deeply loved — by me, always. And even on days when the sun doesn’t shine in your world, I hope that my love is a constant warmth waiting for you to come home to it. So cry if you need to. Rest if you must. And know that I’ll still be here, arms wide open, and a beary big heart full of love, when you’re ready.</p>
      <p>You’re never alone, not really.</p>
      <p>Always yours,</p>
      <p>- Bear</p>
  </div>
  },
  {
    id: 2,
    title: "Open when...",
    image: "letter.png",
    content: "You are feeling happy",
    full: <div>
      <p>To my sunbun,</p>
      <p>If you’re reading this, something wonderful must’ve happened — and oh, how that fills my little bear heart with joy! I just want you to pause for a second and feel it. Let the happiness sink in!. Let the happiness do a little dance in your chest.</p>
      <p>You deserve this moment. Every bit of it. And I hope you know that your happiness makes the whole world better — especially mine. Your smile? It’s my favorite thing. Your joy? It’s contagious. Seeing you happy reminds me why I fell in love with you in the first place — your passion and your lil bun sparkle.</p>
      <p>So whatever has you smiling — whether it’s big or small — I’m right there with you in spirit, doing a little bear boogie and probably grinning like a fool. Let’s celebrate it all, love. You’ve earned this joy.</p>
      <p>With smiles,</p>
      <p>- Bear</p>
    </div>
  },
  {
    id: 3,
    title: "Open when...",
    image: "letter.png",
    content: "You need motivation ",
    full: <div>
      <p>To bunathon,</p>
      <p>If you’re looking at this note, I know you might be feeling a little stuck, tired, or unsure of yourself. And first, let me say: you’ve already come so far. I know it’s easy to forget that when you're staring down a challenge or wrestling with doubt, but don’t forget who you are - the strongest bun I know!</p>
      <p>You are incredible. You are capable of pushing through hard things. You’ve done it before, and you’ll do it again. You have this fire in you — maybe it’s burning low today, but I promise it’s still there. I believe in you. I believe in your strength and your resilience.</p>
      <p>Whatever’s standing in front of you isn’t bigger than the love I have for you — or the love you need to have for yourself. You don’t have to have it all figured out. Just take the next step. Then the next. And know I’m cheering you on, every step of the way.</p>
      <p>You got this bun!</p>
      <p>- Bear</p>
    </div>
  },
   {
    id: 4,
    title: "Open when...",
    image: "letter.png",
    content: "You are feeling lonely",
    full: <div>
      <p>To my dearest bun,</p>
      <p>First of all, I want you to know, with all the certainty in my soul, you are not alone. Not ever.</p>
      <p>Even if I’m not next to you right now, I’m thinking about you. I’m loving you. I’m holding you in my heart. You are with me in everything — in the way I smile at your name, in the thoughts that drift toward you when I hear a song, in the way I picture your face in quiet moments. You’re my person — and that connection doesn’t disappear just because we’re apart.</p>
      <p>So when you feel that ache, I want you to take a deep breath and imagine my arms around you. I’m here. I love you. I’ve got you. Always. You are seen. You are valued. You are mine — and I am yours, no matter the distance.</p>
      <p>I love you always,</p>
      <p>- Bear</p>
    </div>
  },
   {
    id: 5,
    title: "Open when...",
    image: "letter.png",
    content: "You are feeling scared ",
    full: <div>
      <p>Dear bun,</p>
      <p>Fear has a way of making everything feel bigger — the shadows, the doubts, the "what-ifs." And if you’re afraid right now, I want you to know that it doesn’t make you any less strong. In fact, the very fact that you’re still moving forward, still trying, despite the fear — that makes you brave.</p>
      <p>You don’t have to face it all alone. Let me be your safe place - I am just a call away. You that you don’t need to have all the answers. You don’t need to feel strong all the time. Sometimes the bravest thing is just saying, “I’m scared,” and letting someone love you through it.</p>
      <p>Whatever it is, we will face it together. Whether it's a quiet fear or a loud one, I'm here. And no matter what happens next, my love for you won't waver. You’re not just capable — you are powerful. And you have me, always.</p>
      <p>I’ve always got a spare hand for you to hold,</p>
      <p>- Bear</p>
    </div>
  },
   {
    id: 6,
    title: "Open when...",
    image: "letter.png",
    content: "You are feeling excited ",
    full: <div>
      <p>To my best bun,</p>
      <p>Something amazing just happened, didn’t it? I can almost feel your energy from here. I hope you're jumping up and down or maybe doing some happy bun hops — because you deserve to feel every bit of that happiness. I am SO proud of you.</p>
      <p>Whether it’s a dream coming true, a milestone reached, or just a really good day, I want to be the first person you tell! I want to hear every little detail, because your joy is my joy. Your excitement is contagious — it makes everything brighter.</p>
      <p>So take a moment to do an excited bun boogie, and know that I’m celebrating too — probably with tears in my eyes, a huge smile on my face, and love in my heart because the person I adore is having a good time.</p>
      <p>I love you always,</p>
      <p>- Bear</p>
    </div>
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
