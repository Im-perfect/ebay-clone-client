import request from "superagent";
const baseUrl = "http://localhost:4000";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const signup = (username, password) => (dispatch, getState) => {
  console.log(username, password);
  request
    .post(`${baseUrl}/users`)
    .send({ username, password })
    .then(response => {
      console.log("What do we get?", response);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.body.jwt });
    })
    .catch(console.error);
};
