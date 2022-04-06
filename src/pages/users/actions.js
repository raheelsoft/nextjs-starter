import * as constants from "./constants";

export const fetchUsersRequest = (params) => {
  return { type: constants.FETCH_USERS_REQUEST, params };
};

export const fetchUsersSuccess = (payload) => {
  return { type: constants.FETCH_USERS_SUCCESS, payload };
};
