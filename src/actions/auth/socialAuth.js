import request from "<api>/request";
import actionTypes from "./types";

export default (url, socialToken) => dispatch => {
  return request(`${url}/${socialToken}`, "GET")
    .then(response => {
      localStorage.setItem("token", response.token);

      dispatch({
        type: actionTypes.SET_CURRENT_USER
      });
      return Promise.resolve(true);
    })
    .catch(errors => {
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: errors
      });
      return Promise.reject(errors);
    });
};
