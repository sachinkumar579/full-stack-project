import React from "react";
import { useSelector } from "react-redux";

const DisplayCount = () => {
  const count = useSelector((state) => state.count.value);
  return <div>Total users - {count}</div>;
};

export default DisplayCount;
