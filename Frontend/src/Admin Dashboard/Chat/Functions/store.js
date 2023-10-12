import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice.js";
import dataReducer from "./buttonSlice.js";

const store = configureStore({
  reducer: {
    card: cardReducer,
    data: dataReducer,
  },
});

export default store;
