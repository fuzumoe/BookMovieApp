import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

import "./login.css";

const Login = (props) => {
  const inputUsernameChangeHandler = () => {
    console.log("not yet implemented");
  };
  const inputLoginPasswordChangeHandler = () => {
    console.log("not yet implemented");
  };
  const loginClickHandler = () => {
    console.log("not yet implemented");
  };

  return (
    <Fragment>
      <FormControl required>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          type="text"
          username={props.username}
          onChange={inputUsernameChangeHandler}
        />
        <FormHelperText className={props.usernameRequired}>
          <span className="red">required</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl required>
        <InputLabel htmlFor="loginPassword">Password</InputLabel>
        <Input
          id="loginPassword"
          type="password"
          loginpassword={props.loginPassword}
          onChange={inputLoginPasswordChangeHandler}
        />
        <FormHelperText className={props.loginPasswordRequired}>
          <span className="red">required</span>
        </FormHelperText>
      </FormControl>
      {props.loggedIn === true && (
        <FormControl>
          <span className="successText">Login Successful!</span>
        </FormControl>
      )}
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={loginClickHandler}>
        LOGIN
      </Button>
    </Fragment>
  );
};

export default Login;
