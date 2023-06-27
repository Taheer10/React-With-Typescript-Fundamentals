import React from "react";
import TodoList from "./topics/08 React FC/02Medium/TodoList";
import ConditionalRendering from "./topics/08 React FC/02Medium/ConditionalRendering";

const App = () => {
  return (
    <div>
      <TodoList
        todos={[
          { id: 1, text: "Hello", completed: false },
          { id: 2, text: "World", completed: true },
        ]}
      />

      <ConditionalRendering showContent={true} />
    </div>
  );
};

export default App;
