import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "../../service/AccessAPI";

export const fetchLogin = createAsyncThunk("access/login", async (form) => {
  const response = await loginAPI(form);
  return response;
});

const initialState = {
  isLoading: true,
  isLogin: false,
  isError: false,
};

export const accessSlice = createSlice({
  name: "access",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        if (action.payload.status !== 404) {
          state.isLogin = true;
          state.isError = false;
          state.isLoading = false;
          localStorage.setItem("userID", action.payload.message.userId);
          localStorage.setItem("token", action.payload.message.accessToken);
        } else {
          state.isLogin = false;
          state.isError = true;
        }
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default accessSlice.reducer;
