import { SET_ERROR_MESSAGE } from "../actions/types";

const errorMessage = (state = null, action) => {
  if (action.type === SET_ERROR_MESSAGE) {
    return action.payload;
  }
  return state;
};
export default errorMessage;
