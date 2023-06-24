// Render a paragraph if the array of items is not empty, otherwise display a message indicating that the list is empty.

import React from "react";

const Easy02 = ({ items }: { items: string[] }) => {
  return (
    <div>
      {items.length > 0 ? (
        <div>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </div>
      ) : (
        <p>NO items present</p>
      )}
    </div>
  );
};

export default Easy02;
