import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/testimonials"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Testimonials
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
