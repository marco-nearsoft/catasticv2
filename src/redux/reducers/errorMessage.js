import { SET_ERROR_MESSAGE } from "../actions/types";

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
export default errorMessage;
