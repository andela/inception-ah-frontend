import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default async (url, method, data = {}) => {
  try {
    const response = await axios({
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Methods":
          "PUT, POST, GET, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "application/json",
      },
      method,
      url,

      data: { ...data }
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};

export const request = async ({ url, method, data, headers }, isAuthorsHeaven = true) => {
  if (isAuthorsHeaven) {
    url = `https://inception-ah-backend.herokuapp.com${url}`;
  }
  try {
    const response = await axios({ method, url, data, headers });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};
 