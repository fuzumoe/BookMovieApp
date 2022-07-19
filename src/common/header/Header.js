import React from "react";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

import "./Header.css";
import logo from "../../assets/logo.svg";
import Modal from './modal/Modal'

const Header = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
 

  const modalOpenHandler = (event) => {
    console.log("modal opening");
    setmodalIsOpen(true);
  };
  const modalCloseHandler = (event) => {
    console.log("modal closing");
    setmodalIsOpen(false);
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
      <Modal modalIsOpen={modalIsOpen} onClose={{modalCloseHandler}}/> 

    </header>
  );
};





export default Header;
