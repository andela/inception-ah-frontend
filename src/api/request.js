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

export const request = async ({ url, method, data, headers }, isAuthorsHeaven = true) => {
if (isAuthorsHeaven) {
  // const p = url;
  // url = `http://localhost:3000${p}`;
  // // console.log(url, method, localStorage.getItem("token"));
  if (isAuthorsHeaven) {
    url = `https://inception-ah-backend.herokuapp.com${url}`;
  }
}
  try {
    const response = await axios({ method, url, data, headers });
    return Promise.resolve(response);
  } catch (error) {
    console.log(error);
    return Promise.reject(error.response.data.message);
  }
};

// export const request = async ({ url, method, data, headers }, isAuthorsHeaven = true) => {
//   const path = `http://localhost:3000${url}`;
//   // if (isAuthorsHeaven) {
//   //   url = `https://inception-ah-backend.herokuapp.com${url}`;
//   // }
//   try {
//     const response = await axios({ method, path, data, headers });
//     return Promise.resolve(response);
//   } catch (error) {
//     console.log(error)
//     return Promise.reject(error.response.data.message);
//   }
// };
