import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../concepts/ReduxUseCase/profileSlice";

const store = configureStore({
  reducer: {
    storeSliceKey: profileSlice,
  },
});

export default store;
