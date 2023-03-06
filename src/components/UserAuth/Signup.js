import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import "../UserAuth/SignupStyles.css";
import {
  bNumberReducer,
  passwordReducer,
  userNameReducer,
} from "./AuthReducers";
import Binghamton_University_pic from "../../images/Binghamton-University-pic.jpg";
import "./PasswordValidation";
import { AuthContext } from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const inputRef = useRef(null);
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState();

  const [bNumState, dispatchBNum] = useReducer(bNumberReducer, {
    value: "",
    isValid: null,
  });

  const [userNameState, dispatchUserName] = useReducer(userNameReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: bNumIsValid } = bNumState;
  const { isValid: userNameIsValid } = userNameState;
  const { value: enteredPassword, isValid: passIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      if (
        bNumIsValid &&
        userNameIsValid &&
        passIsValid &&
        enteredPassword === enteredConfirmPassword
      ) {
        setFormIsValid(bNumIsValid && userNameIsValid && passIsValid);
        if (formIsValid) {
          console.log("FORM OK");
        }
      }
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [
    bNumIsValid,
    userNameIsValid,
    passIsValid,
    formIsValid,
    enteredConfirmPassword,
    enteredPassword,
  ]);

  const bNumChangeHandler = (event) => {
    // var regexConst = /^B\d{8}$/;
    // console.log(regexConst.test(event.target.value));
    dispatchBNum({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const userNameChangeHandler = (event) => {
    // console.log(event.target.value);
    dispatchUserName({
      type: "USER_INPUT",
      val: event.target.value,
    });
    // console.log(formIsValid);
  };

  const passwordChangehandler = (event) => {
    dispatchPassword({
      type: "USER_INPUT",
      val: event.target.value,
    });
  };

  const confirmPasswordHandler = (event) => {
    setEnteredConfirmPassword(event.target.value);
  };

  const validateBNumHandler = () => {
    dispatchBNum({ type: "INPUT_BLUR" });
    // console.log(formIsValid);
  };

  const validateUserName = () => {
    dispatchUserName({ type: "INPUT_BLUR" });
  };

  const validatePassword = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
    // console.log(`FORM: ${formIsValid}`);
  };

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      // console.log(formIsValid);
      // console.log(bNumState.value, bNumState.isValid);
      // console.log(userNameState.value, userNameState.isValid);
      // console.log(passwordState.value, passwordState.isValid);
      // console.log(enteredConfirmPassword);
      authCtx
        .onSignup(
          userNameState.value,
          bNumState.value,
          "FN1Test",
          "LName1Test",
          passwordState.value
        )
        .then((response) => {
          if (response) {
            navigate("/SelectionScreen");
          }
        });
    }
  };

  return (
    <div className="LoginMainComponent">
      <div className="ImageSlider">
        <img
          src={Binghamton_University_pic}
          alt="Binghamton_University"
          className="BinghamtonUniversityImage"
        />
      </div>
      <div className="UserAuth">
        <form id="loginForm" action="/SelectionScreen">
          <h1 className="headingTitle">Signup</h1>
          <p className="headText">Welcome to Leadership Assesment Program</p>
          <label className="BNumber">B-Number</label>
          <div className="BNumberInputText">
            <input
              ref={inputRef}
              required
              // pattern="[b,B]{1}[0-9]{8}"
              type="text"
              placeholder="Please enter your B-Number"
              onChange={bNumChangeHandler}
              onBlur={validateBNumHandler}
            />
          </div>
          <label htmlFor="email" className="userName1">
            User Name
          </label>
          <div className="userNameInput1">
            <input
              type={"email"}
              //className="userNameInput1"
              placeholder="xyz@binghamton.edu"
              id="email"
              name="email"
              required
              // pattern="^[a-zA-Z0-9]+@binghamton\.edu$"
              onChange={userNameChangeHandler}
              onBlur={validateUserName}
            />
          </div>
          <label htmlFor="password" className="password1">
            Password
          </label>
          <div className="passInput1">
            <input
              type={"password"}
              //className="passInput1"
              placeholder="*************"
              id="password"
              name="password"
              required
              onChange={passwordChangehandler}
              onBlur={validatePassword}
            />
          </div>
          <label htmlFor="password" className="confirmPassword">
            Confirm Password
          </label>
          <div className="confirmPassInput">
            <input
              type={"password"}
              //className="confirmPassInput"
              placeholder="*************"
              id="confirmPassword"
              name="confirmPassword"
              required
              onChange={confirmPasswordHandler}
            />
          </div>
          <div className="LoginButton1">
            <input
              className="LoginText1"
              type="submit"
              value="Sign Up"
              onClick={submitHandler}
            ></input>
          </div>
        </form>
        <form id="LoginForm" action="/">
          <div className="LoginDiv" type="submit">
            <input
              className="AlreadyMemberClass"
              type="submit"
              value="Already a Member?"
            ></input>
            <input className="LoginClass" type="submit" value="Login"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
