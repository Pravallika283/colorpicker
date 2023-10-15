// App.js
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./styles.css";

export default function App() {
  const [pickedColor, setPickedColor] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (color) => {
    setPickedColor(color.hex);

    // Set the picked color as the background color of the body
    document.body.style.backgroundColor = color.hex;
  };

  return (
    <div className="App">
      <div className="container">
        <button onClick={() => setShowColorPicker(!showColorPicker)}>
          Open Color Picker
        </button>
        {showColorPicker && (
          <SketchPicker color={pickedColor} onChange={handleColorChange} />
        )}
        <div className="color-display">
          Picked Color: {pickedColor}
        </div>
      </div>
    </div>
  );
}
