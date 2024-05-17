import axios from "./customAxios";

export const getOrder = async () => {
  const response = await axios.get(`/admin/order`);
  return response.message;
};
