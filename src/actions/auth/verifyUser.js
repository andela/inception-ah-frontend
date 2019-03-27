import request from "<api>/request";
import jwtDecode from "jwt-decode";
import { API_URL } from "<constants>/constants";
import { toast } from "react-toastify";

export default (token, history) => dispatch => {
  return request(`${API_URL}/auth/verification${token}`, "GET")
    .then(response => {
      localStorage.setItem("token", response.data.token);
      const { userId } = jwtDecode(response.data.token);
      history.push(`/profile/${userId}`);
      toast.success("Your account is successfully Verified");
    })
    .catch(() => {
      toast.error("There was problem verifying your account");
      history.push("/signin");
    });
};
