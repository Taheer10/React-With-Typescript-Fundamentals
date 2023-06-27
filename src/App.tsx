import React from "react";

import Authentication from "./topics/08 React FC/03Hard/Authentication";
import Pagination from "./topics/08 React FC/03Hard/Pagination";

const App = () => {
  const handleLogin = (username: string, password: string) => {
    // Perform login logic
    console.log("Logging in with:", username, password);
  };

  const handleLogout = () => {
    // Perform logout logic
    console.log("Logging out");
  };

  const handlePageChange = (pageNumber: number) => {
    // Perform page change logic
    console.log("Changing to page:", pageNumber);
  };

  return (
    <div>
      <Authentication onLogin={handleLogin} onLogout={handleLogout} />

      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
