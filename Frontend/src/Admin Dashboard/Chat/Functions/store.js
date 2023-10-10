import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice.js";

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default store;
