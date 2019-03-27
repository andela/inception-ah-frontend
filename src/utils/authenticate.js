import jwtDecode from "jwt-decode";

export default {
  authenticate() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  },
  logoutUser() {
    localStorage.removeItem("token");
  },

  authenticateEditProfile(userId) {
    const token = localStorage.getItem("token");
    if (token) {
      return jwtDecode(token).userId === userId;
    }
    return false;
  }
};

export const setToken = token => {
  return Promise.resolve(localStorage.setItem("token", token));
};

export const getUserId = () => {
  const token = localStorage.getItem("token");
  try {
    const decoded = jwtDecode(token);
    return Promise.resolve(decoded.userId);
  } catch (error) {
    return Promise.reject(error);
  }
};
