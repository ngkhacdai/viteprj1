import axios from "./customAxios";

export const getAllDataStatical = async () => {
  return await axios.get("/admin/statistical");
};
