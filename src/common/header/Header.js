import React from "react";
import Button from "@material-ui/core/Button";

import "./Header.css";
import logo from "../../assets/logo.svg";

const Header = (props) => {
  const modalOpenHandler = (event) => { console.log('not yet implemented')};
  const logoutHandler = (event) => {console.log('not yet implemented')};

  return (
    <header>
      <nav className="app-header">
        <img src={logo} className="app-logo" alt="Movies App Logo" />
        <div className="login-button">
          <Button
            variant="contained"
            color="default"
            onClick={modalOpenHandler}
          >
            Login
          </Button>
        </div>
        <div className="login-button">
          <Button variant="contained" color="default" onClick={logoutHandler}>
            Logout
          </Button>
        </div>
        <div className="bookshow-button">
          <Button
            variant="contained"
            color="primary"
            onClick={modalOpenHandler}
          >
            Book Show
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
