import React from "react";
import "./navCrossIcon.css"; // Import CSS for animations if needed

const CrossIcon = ({ rotating }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      className={`w-9 h-9 transition-transform duration-300 ${
        rotating ? "rotate-90" : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cross (X) Icon */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6L18 18M6 18L18 6" />
    </svg>
  );
};

export default CrossIcon;
