// Select Form
// This example demonstrates a form with a select dropdown input field.

import React, { useState } from "react";

const Easy02: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form>
      <label>
        Select an option:
        <select value={selectedOption} onChange={handleChange}>
          <option value="">Choose...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
    </form>
  );
};

export default Easy02;
