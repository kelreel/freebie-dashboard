import React from "react";
import "./Sidebar.scss";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as MenuIcon } from "../../../assets/MenuItem.svg";
import { ReactComponent as CloudIcon } from "../../../assets/cloud.svg";
import { ReactComponent as SketchIcon } from "../../../assets/Sketch.svg";
import { ReactComponent as ExperimentsIcon } from "../../../assets/Experiments.svg";
import { ReactComponent as SecurityIcon } from "../../../assets/Security.svg";
import { ReactComponent as OwnershipIcon } from "../../../assets/Ownership.svg";
import { ReactComponent as AbIcon } from "../../../assets/ab-test.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/Logout.svg";
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
            <CloudIcon />
            <Link to="/cloud">Cloud</Link>
          </li>
          <li className="menu__item">
            <SketchIcon />
            <Link to="/sketch">Sketch</Link>
          </li>
          <li className="menu__item">
            <ExperimentsIcon />
            <Link to="/experiments">Experiments</Link>
          </li>
          <li className="menu__item">
            <SecurityIcon />
            <Link to="/security">Security</Link>
          </li>
          <li className="menu__item">
            <OwnershipIcon />
            <Link to="/ownership">Ownership</Link>
          </li>
          <li className="menu__item">
            <AbIcon />
            <Link to="/tests">A/B Test</Link>
          </li>
          <li className="menu__item">
            <LogoutIcon />
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
