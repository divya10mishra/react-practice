import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "profilers",
  initialState: {
    stateName: [],
  },
  reducers: {
    reducerName: (state, action) => {
      let namesArray = action.payload;
      state.stateName = namesArray.map((item) => item.name);
      console.log(state.stateName, "in slice");
    },
  },
});

export const { reducerName } = slice.actions;
export default slice.reducer;
