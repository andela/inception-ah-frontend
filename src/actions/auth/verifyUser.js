import jwtDecode from "jwt-decode";
import { API_URL } from "<constants>/constants";
import { toast } from "react-toastify";
import Axios from "axios";

export default (token, history) => dispatch => {
  return Axios.get(`${API_URL}/auth/verification${token}`)
    .then(response => {
      localStorage.setItem("token", response.data.data.token);
      const { userId } = jwtDecode(response.data.data.token);
      history.push(`/profile/${userId}`);
      toast.success("Your account is successfully Verified");
    })
    .catch(() => {
      toast.error("There was problem verifying your account");
      history.push("/signin");
    });
};
