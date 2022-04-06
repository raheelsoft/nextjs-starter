import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const globalContext = createContext();

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const globalStateSelector = (callbacks) => {
    const states = {};
    Object.keys(callbacks)?.forEach((item) => {
      states[item] = callbacks[item](state[item]);
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
