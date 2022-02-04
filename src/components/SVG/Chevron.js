import React from "react";

const Chevron = ({ className }) => {
  return (
    <span className={className ? className : ""}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          fill="none"
          stroke="#fff"
          stroke-width="1.03"
          points="16 7 10 13 4 7"
        ></polyline>
      </svg>
    </span>
  );
};

export default Chevron;
