import { SIGNUP_SUCCESS } from "../actions/user";
import { LOGIN_SUCCESS } from "../actions/user";
const token = localStorage.getItem("user");
const initialState = token ? token : null;

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      localStorage.setItem("user", action.username);

      return action.username;
    case LOGIN_SUCCESS:
      localStorage.setItem("user", action.username);

      return action.username;
    default:
      return state;
  }
};

export default user;
