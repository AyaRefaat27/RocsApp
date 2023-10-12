import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    updateData: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateData } = cardSlice.actions;

export default cardSlice.reducer;
