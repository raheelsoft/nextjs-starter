import * as constants from "./globalConstants";
import produce from "immer";
import Router from "next/router";
import * as local from "../utils/localStorage";

export const initialState = {
  modalState: {
    visibility: false,
    title: null,
    record: null,
    index: -1,
    type: null,
    loading: false,
  },
  currentUser: {},
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case constants.MODAL_STATE:
      const {
        visibility = false,
        title = null,
        record = null,
        index = -1,
        type = null,
        loading = false,
      } = action.params;
      draft.modalState.visibility = visibility;
      draft.modalState.title = title;
      draft.modalState.record = record;
      draft.modalState.index = index;
      draft.modalState.type = type;
      draft.modalState.loading = loading;
      break;
    case constants.RESET_MODAL_STATE:
      draft.modalState = initialState.modalState;
      break;
    case constants.CURRENT_USER:
      draft.currentUser = action.params;
      break;
    case constants.LOGOUT:
      local.clearStorage();
      Router.push("login");
      break;
    default:
      draft.state = initialState;
      break;
  }
}, initialState);

export default reducer;
