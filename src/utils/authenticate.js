import jwtDecode from "jwt-decode";

export default {
  token: localStorage.getItem("token"),

  authenticate() {
    if (this.token) {
      return true;
    }
    return false;
  },
  logoutUser() {
    localStorage.removeItem("token");
  },

  authenticateEditProfile(userId) {
    if (this.token) {
      return jwtDecode(this.token).userId === userId;
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
