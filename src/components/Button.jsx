import React from "react";

const Button = ({ children, className = "", type = "button", ...props }) => {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
