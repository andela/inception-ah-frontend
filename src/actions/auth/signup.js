import request from "<api>/request";
import { SET_ERROR, VERIFY_USER } from "<authActions>/types/types";
import { API_URL } from "<constants>/constants";
import { API_URL_DEV } from "../../constants/constants";

export default ({ firstName, lastName, email, password }) => dispatch => {
  return request(`${API_URL_DEV}/auth/signup`, "POST", {
    firstName,
    lastName,
    email,
    password
  })
    .then(response => {
      dispatch({
        type: VERIFY_USER,
        payload: response.message
      });
      return Promise.resolve(response.message);
    })
    .catch(errors => {
      dispatch({
        type: SET_ERROR,
        payload: errors
      });
      return Promise.reject(errors);
    });
};
