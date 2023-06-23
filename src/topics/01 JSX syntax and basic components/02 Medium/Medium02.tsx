// Form Component with Controlled Input
import React, { useState } from "react";

const Medium02 = () => {
  const [name, setName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name !== "") {
      alert(`Hello ${name}`);
    } else {
      alert(`Name is empty`);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Medium02;
