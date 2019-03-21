import request from "<api>/request";
import { SET_ERROR } from "<authActions>/types/types";
import { API_URL } from "<constants>/constants";
import { LOAD_PROFILE, UPDATE_PROFILE } from "<profileActions>/types/types";
import { toast } from "react-toastify";

export const getProfile = id => dispatch => {
  return request(`${API_URL}/users/${id}`, "GET")
    .then(response => {
      dispatch({
        type: LOAD_PROFILE,
        payload: response.data
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERROR,
        payload: errors
      });
      toast.error(errors);
    });
};

export const updateProfile = (id, profileData) => dispatch => {
  return request(`${API_URL}/users/${id}/updateProfile`, "PUT", {
    ...profileData
  })
    .then(response => {
      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data
      });
    })
    .catch(errors => {
      dispatch({
        type: SET_ERROR,
        payload: errors
      });
      toast.error(errors);
    });
};
