import { SIGNUP_SUCCESS } from "../actions/user";

const user = (state = null, action = {}) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
        return action.payload;
    default:
      return state;
  }
};

export default user;
