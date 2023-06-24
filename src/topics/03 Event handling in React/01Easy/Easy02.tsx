// Handling Mouse Hover Event
import React, { useState } from "react";

const Easy02 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: isHovered ? "blue" : "red",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      {isHovered ? "Hovered!" : "Hover over me!"}
    </div>
  );
};

export default Easy02;
