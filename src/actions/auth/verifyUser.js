import request from "<api>/request";
import { SET_CURRENT_USER, SET_ERROR } from "<authActions>/types/types";
import { API_URL_DEV } from "<constants>/constants";

export default token => dispatch => {
  return request(`${API_URL_DEV}/auth/verification/${token}`, "GET")
    .then(response => {
      localStorage.setItem("token", response.token);
      dispatch({
        type: SET_CURRENT_USER
      });
      return Promise.resolve(true);
    })
    .catch(errors => {
      dispatch({
        type: SET_ERROR,
        payload: errors
      });
      return Promise.reject(errors);
    });
};
