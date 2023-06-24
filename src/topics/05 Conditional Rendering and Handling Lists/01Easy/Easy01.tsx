// Display a welcome message if the user is logged in, otherwise show a login button.
import React, { useState } from "react";

const Easy01 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        "Welcome User"
      ) : (
        <>
          <button onClick={handleClick}>Login</button>
        </>
      )}
    </div>
  );
};

export default Easy01;
