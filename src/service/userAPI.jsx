import axios from "./customAxios";

export const getAllUser = async () => {
  const response = await axios.get("/admin/user");
  return response.message;
};
