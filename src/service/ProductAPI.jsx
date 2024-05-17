import axios from "./customAxios";

export const getProduct = async () => {
  const response = await axios.get(`/admin/product`);
  return response.message;
};
export const getProductByID = async (id) => {
  const response = await axios.get(`/product/getProduct/${id}`);
  return response.message;
};
