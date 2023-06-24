// Display different messages based on the time of day.

import React from "react";

const Easy03 = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good morning!";
  } else if (hours < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  return <h1>{greeting}</h1>;
};

export default Easy03;
