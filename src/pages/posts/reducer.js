import produce from "immer";

import * as constants from "./constants";

export const initialState = {
  postUrl: null,
  posts: [],
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case constants.FETCH_POSTS_REQUEST:
      draft.postUrl = action?.params?.postUrl;
      draft.posts = [];
      break;
    case constants.FETCH_POSTS_SUCCESS:
      draft.postUrl = null;
      draft.posts = action?.payload || [];
      break;
    default:
      draft.state = initialState;
      break;
  }
}, initialState);

export default reducer;
