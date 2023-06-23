import React from "react";

type textProps= {
    title: string;
}




const Hard01 = ({title, children}: React.PropsWithChildren<textProps>) => {
  return (
    <div>
      <p>Title: {title}</p>
      <p>{children}</p>
    </div>
  )
}

export default Hard01