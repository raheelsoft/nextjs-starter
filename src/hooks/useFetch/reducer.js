import * as constants from "./constants";
import produce from "immer";

export const initialState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case constants.REQUEST:
      draft.loading = true;
      draft.data = null;
      draft.error = null;
      break;
    case constants.SUCCESS:
      draft.loading = false;
      draft.data = action.payload;
      draft.error = null;
      break;
    case constants.ERROR:
      draft.loading = false;
      draft.data = null;
      draft.error = action.payload;
      break;
    default:
      draft.state = initialState;
      break;
  }
}, initialState);

export default reducer;
