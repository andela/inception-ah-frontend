import axios from "axios";

export default async (url, method, data = {}) => {
  try {
    const response = await axios({
      method,
      url,

      data: { ...data }
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};
