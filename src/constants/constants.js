export const GOOGLE_URL = "http://localhost:3000/api/v1/auth/google";
export const FACEBOOK_URL = "http://localhost:3000/api/v1/auth/facebook";
export const API_URL = process.env.NODE_ENV !== "production"
           ? "http://localhost:3000/api/v1"
           : "https://inception-ah-frontend.herokuapp.com";
