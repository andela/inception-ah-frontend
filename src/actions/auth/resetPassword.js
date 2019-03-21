import request from "<api>/request";
import {
  SET_ERROR,
  REQUEST_PASSWORD,
  RESET_PASSWORD
} from "<authActions>/types/types";
import { API_URL } from "<constants>/constants";

export default email => dispatch => {
  return request(`${API_URL}/users/resetPassword`, "POST", {
    email
  })
    .then(response => {
      dispatch({
        type: REQUEST_PASSWORD,
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

export const resetPassword = (password, query) => dispatch => {
  return request(`${API_URL}/users/resetPassword${query}`, "PUT", {
    password
  })
    .then(response => {
      dispatch({
        type: RESET_PASSWORD,
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
