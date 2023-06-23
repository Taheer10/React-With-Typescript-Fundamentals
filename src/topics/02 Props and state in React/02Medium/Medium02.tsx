import React from "react";

type Todo = {
  id: number;
  text: string;
};

type TodoListProps = {
  todos: Todo[];
};

const Medium02 = ({ todos }: TodoListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.text}</h1>
        </div>
      ))}
    </div>
  );
};

export default Medium02;
