import Axios from "axios";
import { toast } from "react-toastify";
// import { API_URL_DEV } from "<constants>/constants";
import { SET_CURRENT_USER, SET_ERROR } from "<authActions>/types/types";
// import jwtDecode from "jwt-decode";
import { API_URL } from "../../constants/constants";

const signInUser = (user, history, from) => dispatch => {
  return Axios.post(`${API_URL}/auth/signin`, { ...user })
    .then(response => {
      localStorage.setItem("token", response.data.data.token);
      dispatch({
        type: SET_CURRENT_USER
      });
      const { userId } = response.data;
      if (from) {
        history.push(from);
      }
      history.push(`/profile/${userId}`);
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
