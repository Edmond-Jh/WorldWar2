import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
window.onscroll = function () {};
const Navbar = () => {
  return (
    <>
      <div
        className="navbar navbar-default navbar-static-top"
        role="navigation"
        id="nav12"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>
            {/* <p className="navbar-brand">Greate History</p> */}
            <p className="titr navbar-brand">
              Greate History <br />
            </p>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/">
                  <p>HOME</p>
                </Link>
              </li>
              <li>
                <Link to="/wars">
                  <p>Wars</p>
                </Link>
              </li>
              <li>
                <Link to="/generals">
                  <p>Generals</p>
                </Link>
              </li>
              <li>
                <Link to="/countries">
                  <p>Countries</p>
                </Link>
              </li>
              <li>
                <Link to="/Sides">
                  <p>Sides</p>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
