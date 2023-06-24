import React from "react";
import DragAndDrop from "./topics/02 Props and state in React/03Hard/DragAndDrop";

const App = () => {
  const dragAndDropItems = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
  ];

  return <DragAndDrop items={dragAndDropItems} />;
};

export default App;
