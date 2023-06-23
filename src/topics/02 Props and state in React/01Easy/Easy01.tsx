import React, { useState } from "react";

const Easy01 = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    console.log(!clicked);
  };

  return (
    <div>
      <label htmlFor="">Status: {clicked ? "Clicked" : "Not Clicked"}</label>
      <br />
      <button type="button" onClick={handleClick}>
        Click Here
      </button>
    </div>
  );
};

export default Easy01;
