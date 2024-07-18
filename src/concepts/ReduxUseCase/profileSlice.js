import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("names/getName", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
});

const namesSlice = createSlice({
  name: "sliceName",
  initialState: {
    namesState: [],
  },

  reducers: {
    nameReducerFunc: (state, action) => {
      console.log(state.namesState, "reducer");
      state.namesState = action.payload.map((item) => item.name);
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.namesState = "pending....";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.namesState = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.namesState = "Rejected!!!!";
      });
  },
});

export const { nameReducerFunc } = namesSlice.actions;
export default namesSlice.reducer;
