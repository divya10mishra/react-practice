import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducerName } from "./profileSlice";

const ReduxUseCase = () => {
  const dispatch = useDispatch();
  let listOfNames = useSelector((state) => state.storeSliceKey.stateName);
  console.log(listOfNames, "profiles in comp");
  useEffect(() => {
    async function getApi() {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let result = await response.json();
      dispatch(reducerName(result));
    }

    getApi();
  }, []);
  return <> </>;
};

export default ReduxUseCase;
