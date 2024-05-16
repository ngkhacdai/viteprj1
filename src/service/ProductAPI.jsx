import axios from "./customAxios";

export const getProduct = async () => {
  const response = await axios.get(`/admin/product`);
  return response.message;
};
