import Axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../constants/constants";
import { SET_CURRENT_USER, SET_ERROR } from "./types/types";

const signInUser = (user, history) => dispatch => {
  return Axios.post(`${API_URL}/auth/signin`, { ...user })
    .then(response => {
      localStorage.setItem("token", response.data.data.token);
      dispatch({
        type: SET_CURRENT_USER
      });
    })
    .then(() => {
      history.push("/profile");
    })
    .catch(error => {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message
      });
      toast.error(error.response.data.message);
    });
};

export default signInUser;
