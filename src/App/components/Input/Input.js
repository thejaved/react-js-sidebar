import React from "react";
import Icons from "../Icons/Icons";
import "./Input.css";

const Input = ({ icon, type, name, placeholder, otherProps }) => {
  return (
    <div className="Input">
      <Icons name={icon} />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
