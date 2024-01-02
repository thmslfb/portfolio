import React from "react";

const Arrow = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-300 group-hover:translate-x-1">
      <path
        d="M5.25 12.75L12.75 5.25"
        stroke="#999999"
        strokeLinecap="round"
        strokeLinejoin="round"></path>
      <path
        d="M5.25 5.25H12.75V12.75"
        stroke="#999999"
        strokeLinecap="round"
        strokeLinejoin="round"></path>
    </svg>
  );
};

export default Arrow;
