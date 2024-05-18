import axios from "./customAxios";

export const getOrder = async () => {
  const response = await axios.get(`/admin/order`);
  return response.message;
};
export const getOrderDetail = async (id) => {
  const response = await axios.get(`/admin/tradingHistory/${id}`);
  return response.message.getTradeing[0];
};
