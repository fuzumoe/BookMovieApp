import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import { validateForm, isFormValid } from "../../validator";
import "./Register.css";

const initialFormDataState = {
  firstName: {
    value: "",
    isValid: false,
    isDirty: false,
  },
  lastName: {
    value: "",
    isValid: false,
    isDirty: false,
  },
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
  contact: {
    value: "",
    isValid: false,
    isDirty: false,
  },
};

const Register = () => {
  const [formData, setFormData] = useState(initialFormDataState);
  const [regStatus, setRegStatus] = useState(0);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(!isFormValid(formData));
  }, [formData]);

  const registerClickHandler = (event) => {
    setFormData(validateForm(formData, null));
    if (!formIsValid) {
      setRegStatus(-1);
    }
    if (formIsValid) {
    }
  };

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

  return (
    <div className="center">
      <FormControl required>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName.value}
          onBlur={inputOnChangeAndOnBlurHandler}
          onChange={inputOnChangeAndOnBlurHandler}
        />
        <FormHelperText
          className={
            !formData.firstName.isValid && formData.firstName.isDirty
              ? ""
              : "no-display"
          }
        >
          <span className="red"> First name must not be empty</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl required>
        <InputLabel htmlFor="lastName">Last Name</InputLabel>
        <Input
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName.value}
          onBlur={inputOnChangeAndOnBlurHandler}
          onChange={inputOnChangeAndOnBlurHandler}
        />
        <FormHelperText
          className={
            !formData.lastName.isValid && formData.lastName.isDirty
              ? ""
              : "no-display"
          }
        >
          <span className="red"> Last name must not be empty</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl required>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          name="email"
          type="text"
          value={formData.email.value}
          onBlur={inputOnChangeAndOnBlurHandler}
          onChange={inputOnChangeAndOnBlurHandler}
        />
        <FormHelperText
          className={
            !formData.email.isValid && formData.email.isDirty
              ? ""
              : "no-display"
          }
        >
          <span className="red">A valid email is required here</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl required>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password.value}
          onBlur={inputOnChangeAndOnBlurHandler}
          onChange={inputOnChangeAndOnBlurHandler}
        />
        <FormHelperText
          className={
            !formData.password.isValid && formData.password.isDirty
              ? ""
              : "no-display"
          }
        >
          <span className="red">Password must be of 8 characters</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      <FormControl required>
        <InputLabel htmlFor="contact">Contact No.</InputLabel>
        <Input
          id="contact"
          name="contact"
          type="text"
          value={formData.contact.value}
          onBlur={inputOnChangeAndOnBlurHandler}
          onChange={inputOnChangeAndOnBlurHandler}
        />
        <FormHelperText
          className={
            !formData.contact.isValid && formData.contact.isDirty
              ? ""
              : "no-display"
          }
        >
          <span className="red">Contact number must be valid</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      {regStatus === 1 && (
        <FormControl>
          <span className="successText">
            Registration was Successful! you can go a head and login.
          </span>
        </FormControl>
      )}

      {regStatus === -1 && (
        <FormControl>
          <span className="errorText">
            The registration form is not filled properly
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
    </div>
  );
};

export default Register;
