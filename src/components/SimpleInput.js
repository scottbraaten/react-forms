import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const nameValid = name.trim() !== "";
  const nameInvalid = !nameValid && nameTouched;

  const emailValid = email.trim() !== "";
  const emailInvalid = !emailValid && emailTouched;

  let formValid = false;

  if (nameValid && emailValid) {
    formValid = true;
  } else {
    formValid = false;
  }

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const nameBlurHandler = (e) => {
    setNameTouched(true);
  };

  const emailBlurHandler = (e) => {
    setEmailTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setNameTouched(true);
    setEmailTouched(true);

    if (!nameValid) {
      return;
    }

    console.log(name);

    setName("");
    setEmail("");
    setNameTouched(false);
    setEmailTouched(false);
  };

  const nameClasses = nameInvalid ? "form-control invalid" : "form-control";
  const emailClasses = emailInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={name}
        />
        {nameInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailInvalid && (
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
