
// export default App;
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Posts from "./pages/Posts/Posts";
// import Footer from "./pages/Footer/Footer";
import Recipies from "./pages/Recipies/Recipies";
import Letters from "./pages/Letters/Letters";
import Puzzle from "./pages/Puzzle/Puzzle";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/recipies" element={<Recipies />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/puzzle" element={<Puzzle />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
