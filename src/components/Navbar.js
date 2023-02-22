import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="navbar-brand">
        <h4>Notes App</h4>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" href="#" to={"/"} end>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/about"} href="#">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
