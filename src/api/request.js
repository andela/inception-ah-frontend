import axios from "axios";

export default async (url, method, data = {}) => {
  try {
    const response = await axios({
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Methods":
          "PUT, POST, GET, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "application/json"
      },
      method,
      url,
      data: { ...data }
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};
