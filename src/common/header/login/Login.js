import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import { validateForm, isFormValid } from "../../validator";


import "./Login.css";

const initialFormDataState = {
    email: {
        value: "",
        isValid: false,
        isDirty: false,
    },
    password: {
        value: "",
        isValid: false,
        isDirty: false,
    },
}
const Login = (props) => {
    const [formData, setFormData] = useState(initialFormDataState);
    const [loginStatus, setLoginStatus] = useState(0);
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        setFormIsValid(!isFormValid(formData));
    }, [formData]);

    const inputOnChangeAndOnBlurHandler = (event) => {

        setFormData({
            ...formData,
            [event.target.name]: {
                ...validateForm(
                    null,
                    { name: event.target.name, value: event.target.value },

                ),
            },
        });
    };

    const loginClickHandler = (event) => {
        setFormData(validateForm(formData, null));
        if (!formIsValid) {
            setLoginStatus(-1);
        }
        if (formIsValid) {
        }
    };


  return (
    <div className="center">
      <FormControl required>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          type="text"
          name="email"
          value={formData.email.value}
          onBlur={inputOnChangeAndOnBlurHandler}
          onChange={inputOnChangeAndOnBlurHandler}
        />
        <FormHelperText
            className={
                !formData.email.isValid && formData.email.isDirty
                    ? ""
                    : "no-display"
            }>
          <span className="red">email address as a user is required here</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl required>
        <InputLabel htmlFor="loginPassword">Password</InputLabel>
        <Input
          id="loginPassword"
          type="password"
          name="password"
          value={formData.password.value}
          onBlur={inputOnChangeAndOnBlurHandler}
          onChange={inputOnChangeAndOnBlurHandler}
        />
        <FormHelperText
            className={
            !formData.password.isValid && formData.password.isDirty
                ? ""
                : "no-display"
        }>
          <span className="red">password must not be empty</span>
        </FormHelperText>
      </FormControl>
        {loginStatus === -2 && (
            <FormControl>
          <span className="successText">
            Wrong credentials were supplied
          </span>
            </FormControl>
        )}
        {loginStatus === -1 && (
            <FormControl>
          <span className="errorText">
            The registration form is not filled properly
          </span>
            </FormControl>
        )}
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={loginClickHandler}>
        LOGIN
      </Button>
    </div>
  );
};

export default Login;
