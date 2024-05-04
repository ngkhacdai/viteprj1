import axios from "./customAxios";

export const loginAPI = async (form) => {
  return await axios.post("/access/login", form);
};
