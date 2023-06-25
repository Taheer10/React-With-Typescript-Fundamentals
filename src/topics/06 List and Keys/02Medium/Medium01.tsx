// Render a list of books with titles and authors using an array of objects.
import React from "react";

interface Book {
  id: number;
  title: string;
  author: string;
}

const Medium01 = () => {
  const books: Book[] = [
    { id: 1, title: "Harry Potter", author: "JK Rollings" },
    { id: 2, title: "Spiderman", author: "Lee" },
    { id: 3, title: "Ironman", author: "Lee" },
  ];

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h1>{book.title}</h1>
          <span>{book.author}</span>
        </div>
      ))}
    </div>
  );
};

export default Medium01;
