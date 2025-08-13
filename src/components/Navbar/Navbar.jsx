import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full py-3 px-5 flex justify-between items-center bg-primary z-50">
      <Link to="/home" className="text-decoration-none">
        <h1 className="my-0 ms-5 font-bold text-white hover:text-accent transition-all duration-300">
          Start Framework
        </h1>
      </Link>

      <ul className="list-none flex justify-center items-center me-5 my-auto">
        <li className="mx-3">
          <NavLink
            to="/about"
            className={({isActive}) => 
              isActive 
                ? "nav-link-active" 
                : "nav-link"
            }
          >
            About
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/portfolio"
            className={({isActive}) => 
              isActive 
                ? "nav-link-active" 
                : "nav-link"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink
            to="/contact"
            className={({isActive}) => 
              isActive 
                ? "nav-link-active" 
                : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
