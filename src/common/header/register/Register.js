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
const InitialRegStatus = {
    code: 0,
    message: ""
}

const Register = (props) => {
  const [formData, setFormData] = useState(initialFormDataState);
  const [regStatus, setRegStatus] = useState(InitialRegStatus);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(!isFormValid(formData));
  }, [formData]);

  const registerClickHandler = async (event) => {
      setFormData(validateForm(formData, null));

      if (!formIsValid) {
          setRegStatus({
              code: -1,
              message: "The registration form is not filled properly"
          });
      }
      if (formIsValid) {
          const params = {
              email_address: formData.firstName.value,
              first_name: formData.lastName.value,
              last_name: formData.email.value,
              mobile_number: formData.password.value,
              password: formData.contact.value
          }
          const header = new Headers();

          header.append("Accept", " application/json");
          header.append("Content-Type", "application/json;charset=UTF-8");

          try {
              const rawResponse = await fetch(`${props.baseUrl}/signup`, {
                  body: JSON.stringify(params),
                  method: 'POST',
                  headers: header,
                  redirect: 'follow'
              });

              const result = await rawResponse.json();

              if(rawResponse.ok) {
                  setRegStatus({
                      code: 1,
                      message: "sign up was successful, please proceed and sign in"
                  });
              } else {
                  const error = new Error();
                  error.message = result.message || 'Something went wrong.';


                  throw error;
              }
          } catch(e) {
              setRegStatus({

                  code:-2,
                  message: e.message,

              });
          }
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
          <span className="red">required</span>
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
          <span className="red">required</span>
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
          <span className="red">required</span>
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
          <span className="red">required</span>
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
          <span className="red">required</span>
        </FormHelperText>
      </FormControl>
      <br />
      <br />
      {regStatus.code !== 0 && (
        <FormControl>
          <span className={regStatus.code < 0 ? "errorText" : regStatus.code > 0 ? "successText" : ""}>
              {regStatus.message}
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
