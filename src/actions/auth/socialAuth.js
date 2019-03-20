import request from "../../api/request";
import { SET_CURRENT_USER, SET_ERROR } from "./types/types";

export default (url, socialToken) => dispatch => {
  return request(`${url}/${socialToken}`, "GET")
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
