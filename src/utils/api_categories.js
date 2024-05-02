// import axios from "axios";

// const API_URL = "http://localhost:5000";

// export const getCategories = async () => {
//   try {
//     const res = await axios.get(API_URL + "/categories");
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

import axios from "axios";

const url = "https://psychic-fiesta-9qr479q7xq3646-5000.app.github.dev";

export const getCategories = async () => {
  try {
    const res = await axios.get(`${url}/categories`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
