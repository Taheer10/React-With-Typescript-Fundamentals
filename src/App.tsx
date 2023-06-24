import React from "react";
import Easy01 from "./topics/05 Conditional Rendering and Handling Lists/01Easy/Easy01";
import Easy02 from "./topics/05 Conditional Rendering and Handling Lists/01Easy/Easy02";
import Easy03 from "./topics/05 Conditional Rendering and Handling Lists/01Easy/Easy03";

const App = () => {
  return (
    <>
      <Easy01 />
      <Easy02 items={["1", "2", "3"]} />
      <Easy03 />
    </>
  );
};

export default App;
