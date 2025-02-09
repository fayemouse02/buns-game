import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Scrapbook from "./pages/Scrapbook/Scrapbook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/scrapbook" element={<Scrapbook />} />
      </Routes>
    </Router>
  );
}

export default App;
