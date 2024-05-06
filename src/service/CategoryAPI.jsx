import axios from "./customAxios";

export const getAllCategory = () => {
  return axios.get("/admin/category");
};
export const createCategory = (formData) => {
  return axios.post("/category/createCategory", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const deleteCategory = (formData) => {
  return axios.post("/category/deleteCategory", formData);
};
export const updateCategory = (formData) => {
  return axios.put("/category/updateCategory", formData);
};
