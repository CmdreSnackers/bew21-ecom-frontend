// import axios from "axios";

// const API_URL = "http://localhost:5000";

// export const getProducts = async (category, sort) => {
//   try {
//     let params = {};
//     if (category !== "all") {
//       params.category = category;
//     }
//     if (sort !== "") {
//       params.sort = sort;
//     }
//     const queries = new URLSearchParams(params);
//     const res = await axios.get(API_URL + "/products?" + queries.toString());
//     console.log(res.data);
//     return res.data;
//   } catch (error) {
//     console.log("Unable to Retreive Product", error);
//   }
// };

import axios from "axios";

const url = "https://psychic-fiesta-9qr479q7xq3646-5000.app.github.dev";

export const getProducts = async (category) => {
  try {
    let params = {};
    if (category !== "all") params.category = category;
    const query = new URLSearchParams(params);
    const res = await axios.get(`${url}/products?${query.toString()}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

// import axios from "axios";

// const url = "http://localhost:5000";

// export const getProducts = async (category) => {
//   try {
//     let params = {};
//     if (category !== "all") params.category = category;
//     const query = new URLSearchParams(params);
//     const res = await axios.get(`${url}/products?${query.toString()}`);
//     return res.data;
//   } catch (e) {
//     console.log(e);
//   }
// };

export const getProduct = async (product_id) => {};
export const addProduct = async (product_id) => {};
export const updateProduct = async (product_id) => {};
export const deleteProduct = async (product_id) => {};
