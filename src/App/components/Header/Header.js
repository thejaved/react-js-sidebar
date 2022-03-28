import React, { useState } from "react";
import Icons from "../Icons/Icons";
import Input from "../Input/Input";
import "./Header.css";

const Header = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY > 200) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", scrollHeader);
  return (
    <div className={`Header ${header ? "active" : ""}`}>
      <form className="search">
        <Input icon={"bx bx-search"} placeholder={"search..."} />
      </form>

      <div className="right_container">
        <Icons name={"bx bx-store"} />
        <Icons name={"bx bx-bell"} />
        <div className="profile">
          <img
            src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg"
            alt="User Profile "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
