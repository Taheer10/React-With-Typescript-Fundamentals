import React, { useState } from "react";

type propsCount = {
  initialCount: number;
};

// const Easy02 = ({ initialCount }: propsCount) => {
//   const [count, setCount] = useState(initialCount);

//   const handleIncrement = () => {
//     setCount((prevCount) => count + 1);
//   };

//   const handleDecrement = () => {
//     setCount((prevCount) => count - 1);
//   };
//   return (
//     <div>
//       Count:{count}
//       <button type="button" onClick={handleIncrement}>
//         Increment
//       </button>
//       <button type="button" onClick={handleDecrement}>
//         Decrement
//       </button>
//     </div>
//   );
// };

//Way 2 o doing same above thing
const Easy02 = (props: propsCount) => {
  const [count, setCount] = useState(props.initialCount);

  const handleIncrement = () => {
    setCount((prevCount) => count + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => count - 1);
  };
  return (
    <div>
      Count:{count}
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Easy02;
