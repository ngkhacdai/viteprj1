import { configureStore } from "@reduxjs/toolkit";
import accessReducer from "./slice/AccessSlice";
import staticalReducer from "./slice/StaticalSlice";

export const store = configureStore({
  reducer: {
    access: accessReducer,
    statical: staticalReducer,
  },
});
