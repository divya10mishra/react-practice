import { createSlice } from "@reduxjs/toolkit";

const calculateSlice = createSlice({
  name: "calculator",
  initialState: {
    result: 0,
  },
  reducers: {
    add: (state, action) => {
      state.result =
        Number(action.payload.input1) + Number(action.payload.input2);
    },
    sub: (state, action) => {
      state.result =
        Number(action.payload.input1) - Number(action.payload.input2);
    },
    multiply: (state, action) => {
      state.result =
        Number(action.payload.input1) * Number(action.payload.input2);
    },
  },
});
export const { add, sub, multiply } = calculateSlice.actions;
export default calculateSlice.reducer;
