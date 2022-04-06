import produce from "immer";

import * as constants from "./constants";

export const initialState = {
  userUrl: null,
  users: [],
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case constants.FETCH_USERS_REQUEST:
      draft.userUrl = action?.params?.userUrl;
      draft.users = [];
    case constants.FETCH_USERS_SUCCESS:
      draft.userUrl = null;
      draft.users = action?.payload || [];
      break;
    default:
      draft.state = initialState;
      break;
  }
}, initialState);

export default reducer;
