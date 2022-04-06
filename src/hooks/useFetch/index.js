import { useReducer, useEffect } from "react";
import { message } from "antd";

import { BASE_URL } from "../../utils/constants";
import reducer, { initialState } from "./reducer";
import * as constants from "./constants";

const useFetch = ({
  url,
  options = {},
  callback = null,
  beforeFetch = null,
  afterFetch = null,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  options["headers"] = {
    "Content-Type": "application/json",
    "AUTH-TOKEN": "your token",
  };
  if (!options?.method) {
    options["method"] = "GET";
  }
  url = BASE_URL + url;

  const apiCall = async () => {
    try {
      dispatch({ type: constants.REQUEST });
      let response = await fetch(url, options);
      response = await response.json();
      if (afterFetch) {
        response = afterFetch(response);
      }
      if (response?.message) {
        message.success(response?.message);
      }
      dispatch({ type: constants.SUCCESS, payload: response });
    } catch (error) {
      message.error(error.message);
      dispatch({ type: constants.ERROR, payload: error });
    }
  };

  useEffect(() => {
    if (callback === null) {
      apiCall();
    }
  }, []);

  return {
    ...state,
    apiCallback: callback ? apiCall : null,
  };
};

export default useFetch;
