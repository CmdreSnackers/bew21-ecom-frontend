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

const url = "http://localhost:5000";

export const getProducts = async (category, perPage, page) => {
  let params = {
    perPage: perPage,
    page: page,
  };
  if (category !== "all") params.category = category;
  const query = new URLSearchParams(params);
  const res = await axios.get(`${url}/products?${query.toString()}`);
  return res.data;
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

export const getProduct = async (id) => {
  // to retrieve product from the API /products/:id
  const res = await axios.get(`${url}/products/${id}`);
  return res.data;
};
export const addProduct = async (data) => {
  const res = await axios.post(
    `${url}/products`, // url of the POST API
    JSON.stringify(data), // data you want to pass through the API in JSON format\
    {
      headers: {
        "Content-Type": "application/json", // telling the API you are sending JSON data
        Authorization: "Bearer " + data.token, // include token in api
      },
    }
  );
  return res.data;
};
export const updateProduct = async (data) => {
  const response = await axios.put(
    `${url}/products/${data.id}`, // url of the PUT API
    JSON.stringify(data), // data you want to pass through the API in JSON format
    {
      headers: {
        "Content-Type": "application/json", // telling the API you are sending JSON data
        Authorization: "Bearer " + data.token, // include token in api
      },
    }
  );
  return response.data;
};

export const deleteProduct = async (data) => {
  const response = await axios.delete(`${url}/products/${data._id}`, {
    headers: {
      Authorization: "Bearer " + data.token, // include token in the API
    },
  });
  return response.data;
};
