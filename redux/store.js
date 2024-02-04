import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./Slices/HomeSlice";
export const store = configureStore({
  reducer: { HomeSlice },
});
