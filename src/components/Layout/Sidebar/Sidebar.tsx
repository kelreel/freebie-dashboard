import React from "react";
import "./Sidebar.scss";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as MenuIcon } from "../../../assets/MenuItem.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Logo className="logo" />
      <div className="line">
        <hr />
      </div>
      <nav className="menu">
        <ul>
          <li className="menu__item">
            <MenuIcon />
            <Link to="/">Overview</Link>
          </li>
          <li className="menu__item">
            <MenuIcon />
            <Link to="/cloud">Cloud</Link>
          </li>
          <li className="menu__item">
            <MenuIcon />
            <Link to="/sketch">Sketch</Link>
          </li>
          <li className="menu__item">
            <MenuIcon />
            <Link to="/experiments">Experiments</Link>
          </li>
          <li className="menu__item">
            <MenuIcon />
            <Link to="/security">Security</Link>
          </li>
          <li className="menu__item">
            <MenuIcon />
            <Link to="/ownership">Ownership</Link>
          </li>
          <li className="menu__item">
            <MenuIcon />
            <Link to="/tests">A/B Test</Link>
          </li>
          <li className="menu__item">
            <MenuIcon />
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
