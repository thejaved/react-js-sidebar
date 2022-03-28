import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../../assets/images/logo.png";
import Icon from "../Icons/Icons";
import MenuData from "./MenuData";
import { useEffect } from "react/cjs/react.development";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [sidebarMobile, setSidebarMobile] = useState(true);
  const sidebarClose = () => {
    if (sidebar) {
      document.documentElement.style.setProperty("--sidebar-width", "80px");
      setSidebar(false);
    } else {
      document.documentElement.style.setProperty("--sidebar-width", "300px");
      setSidebar(true);
    }
  };
  useEffect(() => {
    sidebarClose();
  }, []);

  return (
    <div className={`Sidebar ${sidebarMobile ? "active" : ""}`}>
      <div className="sidebar_header">
        {sidebar && (
          <div className="logo">
            <img src={logo} alt={"site logo"} />
          </div>
        )}
        <a
          onClick={sidebarClose}
          className={sidebar ? "NotOnMobile" : "NotOnMobile arrowStyleApply"}
        >
          <Icon name={"bx bx-left-arrow-alt"} />
        </a>
        <a
          onClick={() => setSidebarMobile(!sidebarMobile)}
          className="OnMobile"
        >
          <Icon name={"bx bx-left-arrow-alt"} />
        </a>
      </div>
      <div className="sidebar_menu_container">
        <ul>
          {MenuData.map((items) => {
            return (
              <li key={items.id}>
                <a href={items.link} className={sidebar ? "" : "active"}>
                  <Icon name={items.icon} />
                  {sidebar && <span>{items.name}</span>}
                </a>
              </li>
            );
          })}
        </ul>
        {sidebarMobile && (
          <div
            className="toggle_menu"
            onClick={() => setSidebarMobile(!sidebarMobile)}
          >
            <Icon name={"bx bx-right-arrow-alt"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
