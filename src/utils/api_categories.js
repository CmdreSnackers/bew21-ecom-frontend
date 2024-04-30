import axios from "axios";

const API_URL = "http://localhost:5000";

export const getCategories = async () => {
  try {
    const res = await axios.get(API_URL + "/categories");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
