import { configureStore } from "@reduxjs/toolkit";
import namesReducerSlice from "../concepts/ReduxUseCase/profileSlice";

const store = configureStore({
  reducer: {
    storeSliceKey: namesReducerSlice,
  },
});

export default store;
