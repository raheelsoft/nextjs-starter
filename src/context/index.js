import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const globalContext = createContext();

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const globalStateSelector = (callbacks) => {
    const states = {};
    Object.keys(callbacks)?.forEach((item) => {
      if (callbacks?.[item]?.otherStates) {
        callbacks?.[item]?.otherStates?.forEach((otherStatesItem) => {
          result[otherStatesItem] = state?.[otherStatesItem];
        });
      }
      result[item] = state[item];
      states[item] = callbacks?.[item]?.selector?.(result);
    });
    return states;
  };

  return (
    <globalContext.Provider
      value={{ globalStateSelector, globalDispatch: dispatch }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContext;
