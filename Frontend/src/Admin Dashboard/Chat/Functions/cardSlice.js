import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {},
  reducers: {
    saveCardData: (state, action) => {
      return action.payload;
    },
  },
});

export const { saveCardData } = cardSlice.actions;

export default cardSlice.reducer;
