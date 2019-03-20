import { API_URL } from "../constants/constants";

export default urlType => {
  const url = `${API_URL}`;
  switch (urlType) {
    case "facebook":
      return `${url}/auth/facebook/redirect`;
    case "google":
      return `${url}/auth/google/redirect`;
    default:
      return null;
  }
};
export const checkAuthType = urlString => {
  if (urlString.includes("facebook")) return "facebook";
  if (urlString.includes("google")) return "google";
  return "false";
};
