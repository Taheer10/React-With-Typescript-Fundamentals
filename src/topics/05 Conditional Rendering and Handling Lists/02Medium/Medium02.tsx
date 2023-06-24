import React, { useState } from "react";

const Medium02 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? "Hide Component" : "Show Component"}
      </button>
      {isVisible && <ComponentToToggle />}
    </div>
  );
};

const ComponentToToggle = () => {
  return <h1>This component can be toggled!</h1>;
};

export default Medium02;
