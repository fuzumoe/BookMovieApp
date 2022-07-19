import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

import "./login.css";

const Login = (props) => {
    
  const registerClickHandler = () => {
    console.log("not yet implemented");
  };
  const inputFirstNameChangeHandler = () => {
    console.log("not yet implemented");
  };
  const inputLastNameChangeHandler = () => {
    console.log("not yet implemented");
  };
  const inputEmailChangeHandler = () => {
    console.log("not yet implemented");
  };
  const inputRegisterPasswordChangeHandler = () => {
    console.log("not yet implemented");
  };
  const inputContactChangeHandler = () => {
    console.log("not yet implemented");
  };
  
  

  return (
    <Fragment>
      <FormControl required>
        <InputLabel htmlFor="firstname">First Name</InputLabel>
        <Input
          id="firstname"
          type="text"
          firstname={props.firstname}
          onChange={inputFirstNameChangeHandler}
        />
        <FormHelperText className={props.firstnameRequired}>
          <span className="red">required</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl required>
        <InputLabel htmlFor="lastname">Last Name</InputLabel>
        <Input
          id="lastname"
          type="text"
          lastname={props.lastname}
          onChange={inputLastNameChangeHandler}
        />
        <FormHelperText className={props.lastnameRequired}>
          <span className="red">required</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl required>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          type="text"
          email={props.email}
          onChange={inputEmailChangeHandler}
        />
        <FormHelperText className={props.emailRequired}>
          <span className="red">required</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl required>
        <InputLabel htmlFor="registerPassword">Password</InputLabel>
        <Input
          id="registerPassword"
          type="password"
          registerpassword={props.registerPassword}
          onChange={inputRegisterPasswordChangeHandler}
        />
        <FormHelperText className={props.registerPasswordRequired}>
          <span className="red">required</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl required>
        <InputLabel htmlFor="contact">Contact No.</InputLabel>
        <Input
          id="contact"
          type="text"
          contact={props.contact}
          onChange={inputContactChangeHandler}
        />
        <FormHelperText className={props.contactRequired}>
          <span className="red">required</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      {props.registrationSuccess === true && (
        <FormControl>
          <span className="successText">
            Registration Successful. Please Login!
          </span>
        </FormControl>
      )}
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={registerClickHandler}
      >
        REGISTER
      </Button>
    </Fragment>
  );
};

export default Login;
