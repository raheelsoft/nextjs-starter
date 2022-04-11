import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import Users from "./users";

export const localContext = createContext();

const LocalContext = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const localStateSelector = (callbacks) => {
    const states = {};
    const result = {};
    Object.keys(callbacks)?.forEach((item) => {
      if (callbacks?.[item]?.otherStates) {
        callbacks?.[item]?.otherStates?.forEach((otherStatesItem) => {
          result[otherStatesItem] = state?.[otherStatesItem];
        });
      }
      result[item] = state[item];
      states[item] = callbacks?.[item]?.selectors?.(result);
      console.log(states, "states");
    });
    return states;
  };

  return (
    <localContext.Provider value={{ localStateSelector, dispatch }}>
      <Users />
    </localContext.Provider>
  );
};

export default LocalContext;
