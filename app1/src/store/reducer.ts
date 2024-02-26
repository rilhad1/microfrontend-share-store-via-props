import { UnknownAction } from "@reduxjs/toolkit";

const initialState = {
  title: "DEFAULT APP 1 TITLE",
};

export const app1Reducer = (state = initialState, action: UnknownAction) => {
  switch (action.type) {
    case "SET_DEFAULT_APP_1":
      return initialState;
    case "SET_APP_1_TITLE":
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export const staticReducers = {
  app1: app1Reducer,
};
