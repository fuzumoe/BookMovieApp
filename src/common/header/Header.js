import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {SET_AUTH, SET_USER, OPEN_MODAL} from "../../reducers/authReducer"
import CustomModal from './CustomModal/CustomModal'

import logo from "../../assets/logo.svg";
import "./Header.css";



const Header = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const modalOpenHandler = (event) => {
    dispatch({type: OPEN_MODAL, payload: true});
  };

  const logoutHandler = (event) => {
    window.sessionStorage.removeItem('user-details');
    window.sessionStorage.removeItem('access-token');
    dispatch({type: SET_USER, payload: {}})
    dispatch({type: SET_AUTH, payload: false});
    dispatch({type: OPEN_MODAL, payload: true});
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
            <Fragment>
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
            </Fragment>
        )}
      </nav>
      <CustomModal baseUrl={props.baseUrl}/>

    </header>
    );
  };





  export default Header;
