import React, { useState } from "react";
import Medium01 from "./topics/02 Props and state in React/02Medium/Medium01";
// import Easy01 from "./topics/02 Props and state in React/01Easy/Easy01";
// import Easy02 from "./topics/02 Props and state in React/01Easy/Easy02";
// import Medium02 from "./topics/02 Props and state in React/02Medium/Medium02";

// type Todo = {
//   id: number;
//   text: string;
// };
const App = () => {
  // const [todos, setTodos] = useState<Todo[]>([
  //   { id: 1, text: "Learn React" },
  //   { id: 2, text: "Build a project" },
  // ]);

  return (
    <>
      {/* <Easy01 /> */}
      {/* <Easy02 initialCount={0} />* */}
      {/* <Easy02 initialCount={0} /> */}

      {/* <Medium02 todos={todos} /> */}
      <Medium01 apiUrl="https://jsonplaceholder.typicode.com/users" />
    </>
  );
};

export default App;
