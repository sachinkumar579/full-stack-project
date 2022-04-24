import React from "react";

const Buttons = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.fetchUsers("all");
        }}
      >
        Display All
      </button>

      <button
        onClick={() => {
          props.fetchUsers("few");
        }}
      >
        Display Few
      </button>
    </div>
  );
};

export default Buttons;
