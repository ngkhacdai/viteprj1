import axios from "./customAxios";

export const getDiscount = async () => {
  const response = await axios.get(`/admin/discount`);
  return response.message;
};
