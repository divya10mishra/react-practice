import { configureStore } from "@reduxjs/toolkit";
import CalculatorSlice from "../features/calculator/CalculatorSlice";

const store = configureStore({
  reducer: {
    calculator: CalculatorSlice,
  },
});

export default store;
