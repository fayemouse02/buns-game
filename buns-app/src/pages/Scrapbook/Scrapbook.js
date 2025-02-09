import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import "./Scrapbook.css";

const backgroundColors = ["#ffffff", "#f8d7da", "#d4edda", "#d1ecf1", "#fef3c7"];

export default function Scrapbook() {
  const [entries, setEntries] = useState([]);
  const [images, setImages] = useState([]);
  const [texts, setTexts] = useState([]);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [newText, setNewText] = useState("");

  useEffect(() => {
    const savedBgColor = localStorage.getItem("scrapbookBgColor");
    if (savedBgColor) setBgColor(savedBgColor);

    const savedEntries = JSON.parse(localStorage.getItem("scrapbookEntries"));
    if (Array.isArray(savedEntries)) setEntries(savedEntries);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, { id: Date.now(), src: reader.result, x: 50, y: 50, width: 150, height: 150 }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const addText = () => {
    if (newText.trim()) {
      setTexts([...texts, { id: Date.now(), content: newText, x: 100, y: 100, width: 200, height: 50 }]);
      setNewText("");
    }
  };

  const changeBgColor = (color) => {
    setBgColor(color);
    localStorage.setItem("scrapbookBgColor", color);
  };

  const savePage = () => {
    const newEntry = { images: [...images], texts: [...texts], bgColor };
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    setImages([]);
    setTexts([]);
    localStorage.setItem("scrapbookEntries", JSON.stringify(updatedEntries));
  };

  const clearScrapbook = () => {
    setEntries([]);
    setBgColor("#ffffff");
    localStorage.removeItem("scrapbookEntries");
    localStorage.setItem("scrapbookBgColor", "#ffffff");
  };

  return (
    <div className="scrapbook-container">
      <h1 className="scrapbook-title">📖 Our Scrapbook 🐻🐰</h1>

      <div className="color-picker">
        {backgroundColors.map((color) => (
          <button key={color} className="color-button" style={{ backgroundColor: color }} onClick={() => changeBgColor(color)} />
        ))}
      </div>

      <div className="scrapbook-page" style={{ backgroundColor: bgColor, position: "relative", overflow: "hidden", width: "80%", height: "500px", margin: "20px auto" }}>
        {images.map((image) => (
          <Rnd key={image.id} default={{ x: image.x, y: image.y, width: image.width, height: image.height }} bounds="parent">
            <img src={image.src} alt="Memory" className="scrapbook-image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Rnd>
        ))}

        {texts.map((text) => (
          <Rnd key={text.id} default={{ x: text.x, y: text.y, width: text.width, height: text.height }} bounds="parent">
            <div className="scrapbook-text">{text.content}</div>
          </Rnd>
        ))}
      </div>

      <input type="file" accept="image/*" id="upload" className="hidden" onChange={handleImageUpload} />
      <label htmlFor="upload" className="scrapbook-button">➕ Add Image</label>

      <div className="add-text-section">
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} placeholder="Enter text" className="text-input" />
        <button className="scrapbook-button" onClick={addText}>📝 Add Text</button>
      </div>

      <button className="scrapbook-button" onClick={savePage}>💾 Save Page</button>
      <button className="scrapbook-button delete-button" onClick={clearScrapbook}>❌ Clear Scrapbook</button>

      {entries.length > 0 && (
        <div className="scrapbook-book">
          <h2 className="scrapbook-section-title">Saved Pages</h2>
          {entries.map((entry, index) => (
            <div key={index} className="scrapbook-page" style={{ backgroundColor: entry.bgColor || "#ffffff", position: "relative", overflow: "hidden", width: "80%", height: "500px", margin: "20px auto" }}>
              {entry.images.map((image) => (
                <Rnd key={image.id} default={{ x: image.x, y: image.y, width: image.width, height: image.height }} bounds="parent" disableDragging>
                  <img src={image.src} alt="Memory" className="scrapbook-image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Rnd>
              ))}
              {entry.texts.map((text) => (
                <Rnd key={text.id} default={{ x: text.x, y: text.y, width: text.width, height: text.height }} bounds="parent" disableDragging>
                  <div className="scrapbook-text">{text.content}</div>
                </Rnd>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}








