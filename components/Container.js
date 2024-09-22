import React from "react";

function Container({ children }) {
  return <div className="flex flex-col min-screen">{children}</div>;
}

export default Container;
