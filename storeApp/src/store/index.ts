import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { app1Reducer, app2Reducer, hostReducer } from "./reducer";
const storeMiddelware = () => {
  return (store: any) => (next: (ac: any) => any) => (action: any) => {
    console.log("action", action);
    return next(action);
  };
};
export const store = configureStore({
  reducer: combineReducers({
    host: hostReducer,
    app1: app1Reducer,
    app2: app2Reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeMiddelware()),
});
