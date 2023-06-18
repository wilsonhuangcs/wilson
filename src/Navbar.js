import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="Home" smooth={true} duration={500}>
            WILSON HUANG
          </Link>
        </li>
      </ul>
      <ul className="right-items">
        <li>
          <Link to="AboutTitle" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="Projects" smooth={true} duration={500}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to="Experience" smooth={true} duration={500}>
            EXPERIENCE
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
