import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    updateButtonData: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateButtonData } = dataSlice.actions;

export default dataSlice.reducer;
