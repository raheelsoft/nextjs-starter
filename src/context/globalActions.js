import * as constants from "./globalConstants";

export const setModalState = (params) => {
  return { type: constants.MODAL_STATE, params };
};

export const setCurrentUser = (params) => {
  return { type: constants.CURRENT_USER, params };
};
