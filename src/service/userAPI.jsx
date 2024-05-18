import axios from "./customAxios";

export const getAllUser = async () => {
  const response = await axios.get("/admin/user");
  return response.message;
};
export const getUser = async (id) => {
  const response = await axios.get(`/admin/getUser/${id}`);
  return response.message;
};
