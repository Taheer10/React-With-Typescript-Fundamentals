//  Render a table of users with sorting functionality based on different columns.

import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

enum SortDirection {
  ASC = "asc",
  DESC = "desc",
}

const Hard01 = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ]);

  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.ASC
  );

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection((prevDirection) =>
        prevDirection === SortDirection.ASC
          ? SortDirection.DESC
          : SortDirection.ASC
      );
    } else {
      setSortColumn(column);
      setSortDirection(SortDirection.ASC);
    }
  };

  const sortedUsers = users.slice().sort((a, b) => {
    if (sortColumn === "name") {
      return (
        a.name.localeCompare(b.name) *
        (sortDirection === SortDirection.ASC ? 1 : -1)
      );
    } else if (sortColumn === "age") {
      return (a.age - b.age) * (sortDirection === SortDirection.ASC ? 1 : -1);
    }
    return 0;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>
            <button onClick={() => handleSort("name")}>Name</button>
          </th>
          <th>
            <button onClick={() => handleSort("age")}>Age</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Hard01;
