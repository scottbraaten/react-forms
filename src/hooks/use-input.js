import { useState } from "react";

const useInput = (validate) => {
  const [eValue, setEValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueValid = validate(eValue);
  const hasError = !valueValid && isTouched;

  const valueChangeHandler = (e) => {
    setEValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEValue("");
    setIsTouched(false);
  };

  return {
    value: eValue,
    isValid: valueValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
