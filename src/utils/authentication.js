export default {
  authenticate() {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  },
  logoutUser() {
    localStorage.removeItem("token");
  }
};

export const setToken = token => {
  return Promise.resolve(localStorage.setItem("token", token));
};
