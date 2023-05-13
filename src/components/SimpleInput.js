import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandlerA,
    inputBlurHandler: nameBlurHandlerA,
    reset: resetNameInput,
  } = useInput((name) => name.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((email) => email.includes("@"));

  let formValid = false;

  if (enteredNameValid && enteredEmailValid) {
    formValid = true;
  } else {
    formValid = false;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!enteredNameValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandlerA}
          onBlur={nameBlurHandlerA}
          value={enteredName}
        />
        {nameHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
