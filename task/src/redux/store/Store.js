import { configureStore } from "@reduxjs/toolkit"
import getAllTodotasks from "../slices/TaskSlice"
export const store = configureStore({
  reducer: {
    app: getAllTodotasks,
  },
});
