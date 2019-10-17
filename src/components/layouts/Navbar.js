import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand h1 ">
        {" "}
        <i className={icon}></i> &nbsp; &nbsp; {title}
      </span>
      <ul>
        <li className="d-inline">
          <Link to="/">Home</Link>
        </li>
        &nbsp;&nbsp;&nbsp;
        <li className="d-inline">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Un-Known",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
