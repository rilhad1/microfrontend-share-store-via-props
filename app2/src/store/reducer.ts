import { UnknownAction } from "@reduxjs/toolkit";

const initialState = {
  title: "DEFAULT APP 2 TITLE",
};

export const app2Reducer = (state = initialState, action: UnknownAction) => {
  switch (action.type) {
    case "SET_DEFAULT_APP_2":
      return initialState;
    case "SET_APP_2_TITLE":
      return { ...state, title: action.payload };
    default:
      return state;
  }
};
