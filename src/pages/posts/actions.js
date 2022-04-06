import * as constants from "./constants";

export const fetchPostsRequest = (params) => {
  return { type: constants.FETCH_POSTS_REQUEST, params };
};

export const fetchPostsSuccess = (payload) => {
  return { type: constants.FETCH_POSTS_SUCCESS, payload };
};
