import { SIGNUP_SUCCESS } from "../actions/user";
import { LOGIN_SUCCESS } from "../actions/user";

const token = localStorage.getItem("jwt");
const initialState = token ? token : null;

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      localStorage.setItem("jwt", action.payload);
      return action.payload;
    case LOGIN_SUCCESS:
      localStorage.setItem("jwt", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default auth;
