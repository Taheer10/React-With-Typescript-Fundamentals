import React from "react";

interface Person {
  id: number;
  name: string;
  age: number;
}

const Easy02 = () => {
  const people: Person[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];
  console.log(people);
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          {person.name}, {person.age} years old
        </li>
      ))}
    </ul>
  );
};

export default Easy02;
