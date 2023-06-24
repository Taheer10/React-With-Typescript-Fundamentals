import React, { useState } from "react";

const Medium01 = () => {
  const [keyPressed, setkeyPressed] = useState(false);

  const handleClick = () => {
    setkeyPressed(!keyPressed);
  };
  return (
    <div>
      <button onClick={handleClick}>
        {keyPressed ? "Key is pressed" : "Not pressed"}
      </button>
    </div>
  );
};

export default Medium01;
