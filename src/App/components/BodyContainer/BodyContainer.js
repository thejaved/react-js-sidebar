import React from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import "./BodyContainer.css";
const BodyContainer = ({ children }) => {
  return (
    <div className="BodyContainer">
      <Header />
      <div className="Our_All_Content">{children}</div>
    </div>
  );
};

export default BodyContainer;
