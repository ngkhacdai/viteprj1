import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllDataStatical } from "../../service/StaticalAPI";

export const fetchStatical = createAsyncThunk(
  "statical/getalldata",
  async () => {
    const response = await getAllDataStatical();
    return response.message;
  }
);

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const staticalSlice = createSlice({
  name: "statical",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatical.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchStatical.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchStatical.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.data = [];
      });
  },
});

export default staticalSlice.reducer;
