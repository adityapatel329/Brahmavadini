import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Import the reducer from the slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here as you create more slices
  },
});
