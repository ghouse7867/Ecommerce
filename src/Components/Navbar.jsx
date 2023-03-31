import React from "react";
import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          {/* <ShoppingCart size={32} /> */}
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </div>
  );
};