import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import Posts from "./posts";

export const localContext = createContext();

const LocalContext = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const localStateSelector = (callbacks) => {
    const states = {};
    Object.keys(callbacks)?.forEach((item) => {
      states[item] = callbacks?.[item]?.(state[item]);
    });
    return states;
  };

  return (
    <localContext.Provider value={{ localStateSelector, dispatch }}>
      <Posts />
    </localContext.Provider>
  );
};

export default LocalContext;
