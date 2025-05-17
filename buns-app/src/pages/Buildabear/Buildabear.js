import React, { useState, useEffect, useRef } from "react";
import "./Buildabear.css";

const avatarSections = {
  lower: ["lower1.png", "lower2.png", "lower3.png", "lower4.png", "lower5.png"],
  upper: ["upper1.png", "upper2.png", "upper3.png"],
  eyes: ["eyes1.png", "eyes2.png", "eyes3.png", "eyes4.png"],
  arms: ["arms1.png", "arms2.png", "arms3.png", "arms4.png", "arms5.png"],
  hat: ["none", "hat1.png", "hat2.png", "hat3.png"],
};

const layerOrder = ["lower", "upper", "eyes", "arms", "hat"]; // draw order

const AvatarCreator = () => {
  const canvasRef = useRef(null);
  const size = 400;

  // Default selections
  const [avatarParts, setAvatarParts] = useState(() => {
    const defaults = {};
    Object.keys(avatarSections).forEach(section => {
      defaults[section] = avatarSections[section][0];
    });
    return defaults;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, size, size);
  
    const loadImage = src =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
      });
  
      const drawAvatar = async () => {
        for (const layer of layerOrder) {
          const filename = avatarParts[layer];
          if (filename && filename !== "none") {
            try {
              const img = await loadImage(`/buildabear/${filename}`);
              ctx.drawImage(img, 0, 0, size, size);
            } catch (err) {
              console.error(`Failed to load ${filename}`, err);
            }
          }
        }
      };
      
  
    drawAvatar();
  }, [avatarParts]);
  


  const handleChange = (section, imageName) => {
    setAvatarParts(prev => ({ ...prev, [section]: imageName }));
  };

  return (
    <div className="avatar-builder">
      <canvas ref={canvasRef} width={size} height={size} />

      <div className="controls">
        {Object.keys(avatarSections).map(section => (
          <div className="section" key={section}>
            <label>{section.toUpperCase()}</label>
            <select
              value={avatarParts[section]}
              onChange={e => handleChange(section, e.target.value)}
            >
              {avatarSections[section].map(filename => (
                <option key={filename} value={filename}>
                  {filename}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarCreator;
