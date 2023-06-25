import React from "react";

const Easy03 = () => {
  const count = 5;
  const numbers = [];

  for (let i = 1; i <= count; i++) {
    numbers.push(i);
  }

  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
};

export default Easy03;
