import React from "react";

type paragraphProps = {
  text: string;
};

const Easyexample = (props: paragraphProps) => {
  return (
    <>
      <p>{props.text}</p>
    </>
  );
};

export default Easyexample;
