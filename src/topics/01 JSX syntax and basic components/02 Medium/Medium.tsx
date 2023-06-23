// Conditional Rendering with Ternary Operator

import React from "react";

const Medium = ({ name }: { name: string }) => {
  return <h1>{name ? `Hello ${name}` : "Hello Anonymous"}</h1>;
};

export default Medium;
