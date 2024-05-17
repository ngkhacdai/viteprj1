import axios from "./customAxios";

export const getShop = async () => {
  const response = await axios.get("/admin/shop");
  return response.message.mergedData;
};
export const getShopDetail = async (id) => {
  const response = await axios.get(`/admin/shopDetail/${id}`);
  return response.message;
};
export const statisticalShop = async (id) => {
  const response = await axios.get(`/admin/statisticalShop/${id}`);
  return response.message;
};
