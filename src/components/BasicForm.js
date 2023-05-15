import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: fNameValue,
    isValid: fNameValid,
    hasError: fNameErr,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = useInput((fName) => fName !== "");

  const {
    value: lNameValue,
    isValid: lNameValid,
    hasError: lNameErr,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: lNameReset,
  } = useInput((lName) => lName !== "");

  const {
    value: emailValue,
    isValid: emailValid,
    hasError: emailErr,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((email) => email.includes("@"));

  let formValid = false;

  if (fNameValid && lNameValid && emailValid) {
    formValid = true;
  } else {
    formValid = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fNameReset();
    lNameReset();
    emailReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className={fNameErr ? "form-control invalid" : "form-control"}>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
            value={fNameValue}
          />
          {fNameErr && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className={lNameErr ? "form-control invalid" : "form-control"}>
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={lNameValue}
          />
          {lNameErr && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailErr ? "form-control invalid" : "form-control"}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailErr && <p className="error-text">Email must have an @ symbol.</p>}
      </div>
      <div className="form-actions">
        <button
          type="submit"
          disabled={!formValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
