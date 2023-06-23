import React, { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
};

type userListProps = {
  apiUrl: string;
};
const Medium01 = ({ apiUrl }: userListProps) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const displayUsers = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log("Error Fetching data", err);
      }
    };
    displayUsers();
  }, [apiUrl]);

  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>{user.name} </li>
      ))}
    </div>
  );
};

export default Medium01;
