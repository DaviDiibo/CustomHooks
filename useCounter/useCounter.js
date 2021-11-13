import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [state, setstate] = useState(initialState);
  const increment = () => {
    setstate(state + 1);
  };
  const decrement = () => {
    setstate(state - 1);
  };
  const Reset = ()=>{
     setstate(initialState)
  }
  return {
    state,
    increment,
    decrement,
    Reset
  };
};
