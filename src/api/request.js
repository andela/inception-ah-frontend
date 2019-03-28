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

export const request = async ({ url, method, data, headers },
  isAuthorsHeaven = true) => {
    console.log(url,data,headers)
  if (isAuthorsHeaven) {
    // url = `https://inception-ah-backend.herokuapp.com${url}`;
       url = `https://localhost:3000${url}`;
  }
  try { 
    const response = await axios({ method, url, data, headers });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};
