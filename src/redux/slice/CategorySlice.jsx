import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
} from "../../service/CategoryAPI";

export const fetchGetAllCategory = createAsyncThunk(
  "category/getallcategory",
  async () => {
    const response = await getAllCategory();
    return response.message;
  }
);
export const fetchCreateCategory = createAsyncThunk(
  "category/createCategory",
  async (formData) => {
    const response = await createCategory(formData);
    return response.message;
  }
);
export const fetchDeleteCategory = createAsyncThunk(
  "category/deletecategory",
  async (formData) => {
    const response = await deleteCategory(formData);
    return response.message;
  }
);

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isModalShow: false,
  categoryName: "",
  isModalDeleteShow: false,
  id_category: "",
  file: "",
  titleModal: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isModalShow = true;
      state.titleModal = action.payload.titleModal;
    },
    showModalupdates: (state, action) => {
      state.id_category = action.payload._id;
      state.categoryName = action.payload.category_name;
      state.file = action.payload.thumb;
      state.titleModal = action.payload.titleModal;
      state.isModalShow = true;
    },
    showModalDelete: (state, action) => {
      state.isModalDeleteShow = true;
      state.id_category = action.payload;
    },
    closeModalDelete: (state) => {
      state.isModalDeleteShow = false;
      state.id_category = "";
    },
    closeModal: (state) => {
      state.id_category = "";
      state.categoryName = "";
      state.file = "";
      state.titleModal = "";
      state.isModalShow = false;
    },
    changeInputName: (state, action) => {
      state.categoryName = action.payload;
    },
    changeUploadImage: (state, action) => {
      state.file = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchGetAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchGetAllCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(fetchCreateCategory.fulfilled, () => {
        console.log("Create category successfully");
      })
      .addCase(fetchCreateCategory.rejected, () => {
        console.log("Create category failed");
      });
    builder
      .addCase(fetchDeleteCategory.fulfilled, () => {
        console.log("Delete category successfully");
      })
      .addCase(fetchDeleteCategory.rejected, () => {
        console.log("Delete category failed");
      });
  },
});

export const {
  showModal,
  closeModal,
  changeInputName,
  changeUploadImage,
  closeModalDelete,
  showModalDelete,
  showModalupdates,
} = categorySlice.actions;

export default categorySlice.reducer;
