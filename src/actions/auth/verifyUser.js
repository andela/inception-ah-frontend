import request from "../../api/request";
import actionTypes from "./types/types";
import { API_URL } from "../../constants/constants";

export default token => dispatch => {
  return request(`${API_URL}/auth/verification/${token}`, "GET")
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
