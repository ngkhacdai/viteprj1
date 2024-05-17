import axios from "./customAxios";

export const getShop = async () => {
  const response = await axios.get("/admin/shop");
  return response.message.mergedData;
};
