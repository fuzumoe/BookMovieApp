import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import {validateForm, isFormValid} from "../../validator";
import {SET_AUTH, SET_USER} from "../../../reducers/authReducer";


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
const initialLoginStatus = {
    code: 0,
    message: "",
}
const Login = (props) => {
    const [formData, setFormData] = useState(initialFormDataState);
    const [loginStatus, setLoginStatus] = useState(initialLoginStatus);
    const [formIsValid, setFormIsValid] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setFormIsValid(!isFormValid(formData));
    }, [formData]);

    const inputOnChangeAndOnBlurHandler = (event) => {

        setFormData({
            ...formData,
            [event.target.name]: {
                ...validateForm(
                    null,
                    {name: event.target.name, value: event.target.value},
                ),
            },
        });
    };

    const loginClickHandler = async (event) => {
        setFormData(validateForm(formData, null));
        if (!formIsValid) {

            setLoginStatus({
                code: -1,
                message: "The login form is not filled properly",
            });
        }
        if (formIsValid) {
            const baseUrl = 'http://127.0.0.1:8085'
            try {
                const params = window.btoa(`${formData.email.value}:${formData.password.value}`);
                const header = new Headers();

                header.append("Accept", " application/json");
                header.append("Content-Type", "application/json;charset=UTF-8");
                header.append("authorization", `Basic ${params}`);

                const rawResponse = await fetch(`${baseUrl}/api/v1/auth/login`, {
                    body: JSON.stringify(params),
                    method: 'POST',
                    headers: header,

                });

                const result = await rawResponse.json();

                if (rawResponse.ok) {

                    window.sessionStorage.setItem('user-details', JSON.stringify(result));
                    window.sessionStorage.setItem('access-token', rawResponse.headers.get('access-token'))

                    setLoginStatus({code: 1, message: "You are authenticated successfully"});
                    dispatch({type: SET_USER, payload: result})
                    dispatch({type: SET_AUTH, payload: true});

                } else {
                    const error = new Error();
                    error.message = result.message || 'Something went wrong.';
                    throw error;
                }
            } catch (e) {
                setLoginStatus({ code:-2,  message: e.message,});
            }

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
            <br/>
            <br/>
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
            <br/>
            <br/>
            {loginStatus.code !== 0 && (
                <FormControl>
          <span className={loginStatus.code < 0 ? "errorText" : loginStatus.code > 0 ? "successText" : ""}>
              {loginStatus.message}
          </span>
                </FormControl>
            )}
            <br/>
            <br/>
            <Button variant="contained" color="primary" onClick={loginClickHandler}>
                LOGIN
            </Button>
        </div>
    );
};

export default Login;
