import request from "<api>/request";
import jwtDecode from "jwt-decode";
import { API_URL } from "<constants>/constants";
import { toast } from "react-toastify";

export default token => dispatch => {
  return request(`${API_URL}/auth/verification${token}`, "GET")
    .then(response => {
      localStorage.setItem("token", response.data.token);
      return Promise.resolve(response.data.token);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};
