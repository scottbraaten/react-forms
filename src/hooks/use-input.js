import { useReducer, useState } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return initialState;
  }
  return {
    initialState,
  };
};

const useInput = (validate) => {
  const [state, dispatch] = useReducer(inputStateReducer, initialState);

  const valueValid = validate(state.value);
  const hasError = !valueValid && state.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "CHANGE", value: e.target.value });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: state.value,
    isValid: valueValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
