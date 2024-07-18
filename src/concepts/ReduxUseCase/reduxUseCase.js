import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, nameReducerFunc } from "./profileSlice";

function ReduxUseCase() {
  const dispatch = useDispatch();
  const names = useSelector((state) => state.storeSliceKey.namesState);
  console.log(names, "names from reducer");

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <button onClick={() => dispatch(nameReducerFunc(names))}>
      reduxUseCase
    </button>
  );
}

export default ReduxUseCase;
