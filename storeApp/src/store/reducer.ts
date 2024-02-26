import { UnknownAction } from "@reduxjs/toolkit";

const hostInitialState = {
  title: "DEFAULT HOST APP TITLE",
  subtitle: "Default host APP sub title",
};

export const hostReducer = (
  state = hostInitialState,
  action: UnknownAction,
) => {
  switch (action.type) {
    case "SET_DEFAULT":
      return hostInitialState;
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_SUB_TITLE":
      return { ...state, subtitle: action.payload };
    default:
      return state;
  }
};

const app1initialState = {
  title: "DEFAULT APP 1 TITLE",
};

export const app1Reducer = (
  state = app1initialState,
  action: UnknownAction,
) => {
  switch (action.type) {
    case "SET_DEFAULT_APP_1":
      return app1initialState;
    case "SET_APP_1_TITLE":
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

const app2InitialState = {
  title: "DEFAULT APP 2 TITLE",
};

export const app2Reducer = (
  state = app2InitialState,
  action: UnknownAction,
) => {
  switch (action.type) {
    case "SET_DEFAULT_APP_2":
      return app2InitialState;
    case "SET_APP_2_TITLE":
      return { ...state, title: action.payload };
    default:
      return state;
  }
};
