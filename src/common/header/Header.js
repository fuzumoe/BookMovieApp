import React from "react";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const modalOpenHandler = (event) => {
    console.log("not yet implemented");
  };
  const logoutHandler = (event) => {
    console.log("not yet implemented");
  };

  return (
    <header>
      <nav className="app-header">
        <img src={logo} className="app-logo" alt="Movies App Logo" />
        {!isLoggedIn && (
          <div className="login-button">
            <Button
              variant="contained"
              color="default"
              onClick={modalOpenHandler}
            >
              Login
            </Button>
          </div>
        )}
        {isLoggedIn && (
          <div className="login-button">
            <Button variant="contained" color="default" onClick={logoutHandler}>
              Logout
            </Button>
          </div>
        )}
        {isLoggedIn && (
          <div className="bookshow-button">
            <Button
              variant="contained"
              color="primary"
              onClick={modalOpenHandler}
            >
              Book Show
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
