import { configureStore } from "@reduxjs/toolkit";
import accessReducer from "./slice/AccessSlice";
import staticalReducer from "./slice/StaticalSlice";
import categoryReducer from "./slice/CategorySlice";

export const store = configureStore({
  reducer: {
    access: accessReducer,
    statical: staticalReducer,
    category: categoryReducer,
  },
});
