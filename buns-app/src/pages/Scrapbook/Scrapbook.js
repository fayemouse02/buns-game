import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import "./Scrapbook.css";

const backgroundColors = ["#ffffff", "#f8d7da", "#d4edda", "#d1ecf1", "#fef3c7"];

export default function Scrapbook() {
  const [entries, setEntries] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [images, setImages] = useState([]);
  const [bgColor, setBgColor] = useState("#ffffff");

  // Load saved scrapbook state
  useEffect(() => {
    const savedBgColor = localStorage.getItem("scrapbookBgColor");
    if (savedBgColor) setBgColor(savedBgColor);

    const savedEntries = JSON.parse(localStorage.getItem("scrapbookEntries"));
    if (savedEntries) setEntries(savedEntries);
  }, []);

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([
          ...images,
          { id: Date.now(), src: reader.result, x: 50, y: 50, width: 150, height: 150 },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Image Drag
  const onDragStop = (index, e, d) => {
    const newImages = [...images];
    newImages[index] = { ...newImages[index], x: d.x, y: d.y };
    setImages(newImages);
  };

  // Handle Image Resize
  const onResizeStop = (index, e, direction, ref, delta, position) => {
    const newImages = [...images];
    newImages[index] = {
      ...newImages[index],
      width: ref.style.width.replace("px", ""),
      height: ref.style.height.replace("px", ""),
      x: position.x,
      y: position.y,
    };
    setImages(newImages);
  };

  // Handle Background Color Change
  const changeBgColor = (color) => {
    setBgColor(color);
    localStorage.setItem("scrapbookBgColor", color);
  };

  // Save Scrapbook Page
  const savePage = () => {
    const newEntry = { images, bgColor };
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    setImages([]);
    localStorage.setItem("scrapbookEntries", JSON.stringify(updatedEntries));
  };

  return (
    <div className="scrapbook-container">
      <h1 className="scrapbook-title">📖 Our Scrapbook 🐻🐰</h1>

      {/* Background Color Picker */}
      <div className="color-picker">
        {backgroundColors.map((color) => (
          <button key={color} className="color-button" style={{ backgroundColor: color }} onClick={() => changeBgColor(color)} />
        ))}
      </div>

      {/* Editable Scrapbook Page */}
      <div className="scrapbook-page" style={{ backgroundColor: bgColor }}>
        {images.map((image, index) => (
          <Rnd
            key={image.id}
            size={{ width: image.width, height: image.height }}
            position={{ x: image.x, y: image.y }}
            bounds="parent"
            onDragStop={(e, d) => onDragStop(index, e, d)}
            onResizeStop={(e, direction, ref, delta, position) => onResizeStop(index, e, direction, ref, delta, position)}
          >
            <img src={image.src} alt="Memory" className="scrapbook-image" />
          </Rnd>
        ))}
      </div>

      {/* Upload Button */}
      <input type="file" accept="image/*" id="upload" className="hidden" onChange={handleImageUpload} />
      <label htmlFor="upload" className="scrapbook-button">➕ Add Image</label>

      {/* Save Page Button */}
      <button className="scrapbook-button" onClick={savePage}>💾 Save Page</button>

      {/* View Saved Pages */}
      {entries.length > 0 && (
        <div className="scrapbook-book">
          <h2 className="scrapbook-section-title">Saved Pages</h2>
          {entries.map((entry, pageIndex) => (
            <div key={pageIndex} className="scrapbook-page" style={{ backgroundColor: entry.bgColor }}>
              <p className="scrapbook-page-title">Page {pageIndex + 1}</p>
              {entry.images.map((image) => (
                <Rnd
                  key={image.id}
                  size={{ width: image.width, height: image.height }}
                  position={{ x: image.x, y: image.y }}
                  bounds="parent"
                  disableDragging // Prevent users from dragging saved pages
                >
                  <img src={image.src} alt="Memory" className="scrapbook-image" />
                </Rnd>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}




