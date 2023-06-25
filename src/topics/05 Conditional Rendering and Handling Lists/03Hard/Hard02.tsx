// Render different components based on a selected option from a dropdown
import React, { useState } from "react";

const Hard02 = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="component1">Component 1</option>
        <option value="component2">Component 2</option>
        <option value="component3">Component 3</option>
      </select>
      {selectedOption === "component1" && <Component1 />}
      {selectedOption === "component2" && <Component2 />}
      {selectedOption === "component3" && <Component3 />}
    </div>
  );
};

const Component1 = () => {
  return <h1>Component 1</h1>;
};

const Component2 = () => {
  return <h1>Component 2</h1>;
};

const Component3 = () => {
  return <h1>Component 3</h1>;
};

export default Hard02;
