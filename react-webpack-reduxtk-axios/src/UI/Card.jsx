import React from "react";

const Card = (props) => {
  return (
    <div>
      {props.data.map((item, index) => (
        <div key={index}>
          <div>
            <div>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
            <div>{item.age}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
