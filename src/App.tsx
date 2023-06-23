import React from "react";
// import Easyexample from "./topics/01 JSX syntax and basic components/01 Easy/Easyexample";
// import Medium from "./topics/01 JSX syntax and basic components/02 Medium/Medium";
// import Medium02 from "./topics/01 JSX syntax and basic components/02 Medium/Medium02";
import Hard01 from "./topics/01 JSX syntax and basic components/03 Hard/Hard01";

// function App() {
//   return (
//     <div className="App">
//       {/* <Easyexample text="Hello User" /> */}
//       <Medium name="Nirose" />
//     </div>
//   );
// }

const App = () => {
  // const user = "Alice";

  // return <Medium name={user} />; //It must be in same line to pass value using variable
  return (
    <>
      {/* <Medium02 />; */}
      <Hard01 title="React With Typescript" />
      <p>Content goes here for children</p>
    </>
  );
};

export default App;
