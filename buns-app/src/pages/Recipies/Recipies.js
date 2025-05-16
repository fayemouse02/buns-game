import React, { useState } from "react";
import PostCard from "../Postcard/Postcard";
import "./Recipies.css";

const posts = [
  {
    id: 1,
    title: "Lasagna",
    image: "recipiepics/lasagna.png",
    content: "Prep Time: 20 min | Cook Time: 40 min | Serves: 4–6",
    full: (
      <div>
        <h4>Ingredients:</h4>
        <ul>
          <li>1 large carrot, grated</li>
          <li>1 white onion, very finely chopped</li>
          <li>1/3 pack mushrooms, finely chopped</li>
          <li>500g minced meat (beef or beef/pork mix)</li>
          <li>1 jar (approx. 500g) red pasta sauce</li>
          <li>Lasagna pasta sheets</li>
          <li>1 jar white/cream sauce (béchamel or cheese)</li>
          <li>Grated cheese (cheddar or mozzarella)</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>Preheat oven to 180°C (356°F).</li>
          <li>Sauté onion, carrot, and mushrooms in oil for 5–7 min.</li>
          <li>Add minced meat, cook until browned.</li>
          <li>Pour in red sauce, simmer for 10–15 min.</li>
          <li>Layer meat, pasta, cream sauce in a baking dish. Repeat.</li>
          <li>Top with cheese, bake for 20 min. Grill for 5–10 min.</li>
          <li>Let rest before serving.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 2,
    title: "Pulled Pork",
    image: "recipiepics/pulledpork.png",
    content: "Prep Time: TODO | Cook Time: TODO | Serves: TODO",
    full: (
      <div>
        <h4>Ingredients: TODO</h4>
        
      </div>
    ),
  },
  {
    id: 3,
    title: "Creamy Mashed Potatoes",
    image: "recipiepics/mashedpotatoes.png",
    content: "Prep Time: 10 min | Cook Time: 35 min | Serves: 4",
    full: (
      <div>
        <h4>Ingredients:</h4>
        <ul>
          <li>1 kg King Edward or Maris Piper potatoes</li>
          <li>Salt for boiling water</li>
          <li>Approx. 50 ml milk</li>
          <li>Approx. 25 g butter</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>Scrub or peel potatoes. Boil in salted water until tender.</li>
          <li>Drain, return to pot, and steam-dry for 5 min.</li>
          <li>Mash thoroughly, stir in milk and butter, season to taste.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 4,
    title: "Cheesecake",
    image: "recipiepics/cheesecake.png",
    content: "Prep Time: TODO | Cook Time: TODO | Serves: TODO",
    full: <p>TODO</p>,
  },
  {
    id: 5,
    title: "Mushroom Pasta",
    image: "recipiepics/mushroompasta.png",
    content: "Prep Time: 10 min | Cook Time: 20 min | Serves: 2–3",
    full: (
      <div>
        <h4>Ingredients:</h4>
        <ul>
          <li>2–3 rashers of bacon (optional)</li>
          <li>2/3 pack mushrooms, sliced</li>
          <li>Olive oil</li>
          <li>Salt and pepper</li>
          <li>1 tsp dried thyme</li>
          <li>300 ml double cream</li>
          <li>Up to 300 ml milk</li>
          <li>Lemon juice to taste</li>
          <li>Cornflour if needed</li>
          <li>Pasta (spaghetti or tagliatelle)</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>Cook pasta and set aside. Fry bacon (if using) and set aside.</li>
          <li>Fry mushrooms, add thyme, cream, milk gradually.</li>
          <li>Stir and thicken sauce, add lemon juice and optional cornflour.</li>
          <li>Combine with pasta and bacon. Serve hot.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 6,
    title: "Spaghetti Bolognese",
    image: "recipiepics/spaghetti.png",
    content: "Prep Time: 20 min | Cook Time: 1.5–2 hrs | Serves: 4",
    full: (
      <div>
        <h4>Ingredients:</h4>
        <ul>
          <li>2 carrots, grated</li>
          <li>1 punnet mushrooms, finely chopped</li>
          <li>1 large white onion</li>
          <li>500g minced beef</li>
          <li>750g jar Bolognese sauce</li>
          <li>1 tsp tomato purée</li>
          <li>1 tsp sugar</li>
          <li>Salt, to taste</li>
          <li>1 tbsp cooking oil</li>
          <li>Spaghetti</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>Sauté veg in oil for 8 min.</li>
          <li>Add mince and brown.</li>
          <li>Stir in sauce, purée, sugar, and salt. Simmer 1.5–2 hrs.</li>
          <li>Cook spaghetti. Serve with sauce.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 7,
    title: "Honey Garlic Salmon",
    image: "recipiepics/salmon.png",
    content: "Prep Time: 5 min | Cook Time: 20 min | Serves: 2",
    full: (
      <div>
        <h4>Ingredients:</h4>
        <ul>
          <li>2 salmon fillets</li>
          <li>Salt and pepper</li>
          <li>Juice of 1/2 lemon</li>
          <li>1 tbsp butter</li>
          <li>Drizzle of honey</li>
          <li>1 heaped tsp of minced garlic</li>
          <li>Foil</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>Preheat oven to 180°C (356°F).</li>
          <li>Wrap each fillet in foil with seasoning, lemon, garlic, honey and butter.</li>
          <li>Make sure there is room to steam in the foil - pinch the sizes and gently fold the top over into a boat shape.</li>
          <li>Bake for 20 min. Serve hot.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 8,
    title: "Spare Ribs",
    image: "recipiepics/ribs.png",
    content: "Prep: 15 min + marinate | Cook: 6–8 hrs | Serves: 2–3",
    full: (
      <div>
        <h4>Ingredients:</h4>
        <ul>
          <li>1.2 lbs (approx. 500g) pork ribs</li>
          <li>2 tbsp hoisin sauce</li>
          <li>2 tbsp honey (plus extra for grilling)</li>
          <li>1 tbsp soy sauce</li>
          <li>1 tbsp rice wine or dry sherry</li>
          <li>1 tsp Chinese five-spice</li>
          <li>1/2 tsp garlic</li>
          <li>1/2 tsp ginger</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>Marinate overnight in sauce.</li>
          <li>Slow cook 6–8 hrs depending on cut.</li>
          <li>Grill briefly with honey to finish.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 9,
    title: "Sponge cake",
    image: "recipiepics/spongecake.png",
    content: "Prep Time: TODO | Cook Time: TODO | Serves: TODO",
    full: <p>TODO</p>,
  },
  {
    id: 10,
    title: "Buttercream cupcakes",
    image: "recipiepics/cupcake.png",
    content: "Prep Time: TODO | Cook Time: TODO | Serves: TODO",
    full: <p>TODO</p>,
  },
  {
    id: 11,
    title: "Carrot cake",
    image: "recipiepics/carrotcake.png",
    content: "Prep Time: TODO | Cook Time: TODO | Serves: TODO",
    full: <p>TODO</p>,
  },
  {
    id: 12,
    title: "Rocky road",
    image: "recipiepics/rockyroad.png",
    content: "Prep Time: TODO | Cook Time: TODO | Serves: TODO",
    full: <p>TODO</p>,
  },
  {
    id: 13,
    title: "Chocolate fondue",
    image: "recipiepics/fondue.png",
    content: "Prep Time: TODO | Cook Time: TODO | Serves: TODO",
    full: <p>TODO</p>,
  },
  {
    id: 14,
    title: "Slow cooked pork in apple",
    image: "recipiepics/porkandapple.png",
    content: "Prep Time: TODO | Cook Time: TODO | Serves: TODO",
    full: <p>TODO</p>,
  },
  {
    id: 15,
    title: "Gooey chocolate brownies",
    image: "recipiepics/brownies.png",
    content: "Prep Time: TODO | Cook Time: TODO | Serves: TODO",
    full: <p>TODO</p>,
  },
  {
    id: 16,
    title: "Chocolate chip banana muffins",
    image: "recipiepics/bananachocchip.png",
    content: "Prep Time: TODO | Cook Time: TODO | Serves: TODO",
    full: <p>TODO</p>,
  },
];


function Recipies() {
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
        image={post.image}
        onClick={() => setSelectedPost(post)}
      />
      
      ))}
    </div>
  );
}

export default Recipies;

