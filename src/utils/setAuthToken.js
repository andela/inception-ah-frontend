import axios from "axios";

export default () => {
  const token = window.localStorage.getItem("token");
  if (token) {
    // Apply to every request
    axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};
