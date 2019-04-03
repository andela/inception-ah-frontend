import { toast } from "react-toastify";
import request from "<api>/request";
import actionTypes from "./types";
import { API_URL } from "<constants>/constants";

export const signUpSuccess = payload => ({
  type: actionTypes.VERIFY_USER,
  payload
});

export const signUpFailure = error => ({
  type: actionTypes.SET_ERROR,
  error
});

const signUpUser = ({
  firstName,
  lastName,
  email,
  password
}) => async dispatch => {
  try {
    const response = await request(`${API_URL}/auth/signup`, "POST", {
      firstName,
      lastName,
      email,
      password
    });

    dispatch(signUpSuccess(response.message));
    toast.success(response.message, { autoClose: false });
  } catch (error) {
    dispatch(signUpFailure(error.message));
    toast.error(error.message);
  }
};
export default signUpUser;
