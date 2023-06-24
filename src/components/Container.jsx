import React from "react";
const Card = ({ children, isFullHeight }) => {
  return (
    <div
      className={
        isFullHeight === true
          ? "bg-white shadow-sm rounded-md p-4 h-screen"
          : "bg-white shadow-sm rounded-md p-4 "
      }
    >
      {children}
    </div>
  );
};

export default Card;
