import React, { useState } from "react";

const Medium02 = () => {
  const [keyPressed, setkeyPressed] = useState("");

  const handleDown = (event: React.KeyboardEvent) => {
    setkeyPressed(event.key);
  };

  return (
    <div>
      <div tabIndex={0} onKeyDown={handleDown}>
        Press any key
        <p>Last key pressed: {keyPressed}</p>
      </div>
    </div>
  );
};

export default Medium02;
