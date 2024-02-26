import { UnknownAction } from "redux";

const initialState = {
  title: "DEFAULT HOST APP TITLE",
  subtitle: "Default host APP sub title",
};

export const hostReducer = (state = initialState, action: UnknownAction) => {
  switch (action.type) {
    case "SET_DEFAULT":
      return initialState;
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_SUB_TITLE":
      return { ...state, subtitle: action.payload };
    default:
      return state;
  }
};

export const staticReducers = {
  host: hostReducer,
};
