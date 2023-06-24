// Asynchronous Event Handling

import React, { useState } from "react";

const Hard01 = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(!loading);
    await simulateAsyncAPI();
    setLoading(!loading);
    setLoading(loading);
  };

  const simulateAsyncAPI = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Loading..." : "Data"}
      </button>
    </div>
  );
};

export default Hard01;
