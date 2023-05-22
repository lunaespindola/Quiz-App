import React from "react";
import '../styles/NavBar.css'
import {Link} from "react-router-dom";



const Navbar = () => {


  return (
    
    <nav className="navbar">
      <h1 className="navbar__logo">Quiz App</h1>
      <ul className="navbar__menu">
        <Link className="navbar__item" to="/">Home</Link>
        <Link className="navbar__item" to="/scores">Scores</Link>
        <Link className="navbar__item" to="/register">Register</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
