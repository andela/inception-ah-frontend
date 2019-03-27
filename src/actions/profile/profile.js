import axios from "axios";
import request from "<api>/request";
import { SET_ERROR } from "<authActions>/types/types";
import { API_URL } from "<constants>/constants";
import { LOAD_PROFILE, UPDATE_PROFILE } from "<profileActions>/types/types";
import { toast } from "react-toastify";
import FormData from "form-data";
import formatUpdate from "<utils>/update";
// import { API_URL_DEV } from "../../constants/constants";

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

const updateProfile = user => dispatch => {
  return axios
    .put(`${API_URL}/users/${user.id}/updateProfile`, formatUpdate(user), {
      headers: {
        Authorization: window.localStorage.getItem("token")
      }
    })
    .then(response => {
      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data.data
      });
      toast.success("Profile updated successfully");
    })
    .catch(errors => {
      dispatch({
        type: SET_ERROR,
        payload: errors
      });
    });
};

export const updateProfileRequest = user => dispatch => {
  if (user.imageFile.name) {
    const imageData = new FormData();
    imageData.append("file", user.imageFile);
    imageData.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET);

    return axios({
      method: "POST",
      url: process.env.CLOUDINARY_API_URL,
      data: imageData
    })
      .then(response => {
        user.imageURL = response.data.secure_url;
        return dispatch(updateProfile(user));
      })
      .catch(() => {
        dispatch({ type: SET_ERROR, payload: "Upload Image Failed" });
        toast.error("Upload Image Failed");
      });
  }
  return dispatch(updateProfile(user));
};
