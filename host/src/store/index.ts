import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { hostReducer } from "./reducers";

const createCrossMfMiddleware = (channelName: string) => {
  const broadcastChannel = new BroadcastChannel(channelName);

  return (store: any) => (next: (ac: any) => any) => (action: any) => {
    if (action.skipBroadcast) return next(action);
    if (["SET_APP_1_TITLE", "SET_APP_2_TITLE"].includes(action.type)) {
      broadcastChannel.postMessage(action);
    }

    return next(action);
  };
};

export const store = configureStore({
  reducer: combineReducers({
    host: hostReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      createCrossMfMiddleware("HOST_APP_CHANEL"),
      createCrossMfMiddleware("APP_1_CHANEL"),
      createCrossMfMiddleware("APP_2_CHANEL"),
    ),
});

const broadcastApp1Channel = new BroadcastChannel("APP_1_CHANEL");
const broadcastApp2Channel = new BroadcastChannel("APP_2_CHANEL");
broadcastApp1Channel.onmessage = (event) => {
  // We assume that the SET_SUB_TITLE should not be propagated again to avoid loops
  if (event.data.type === "SET_SUB_TITLE") {
    store.dispatch({ ...event.data, skipBroadcast: true });
  }
};
broadcastApp2Channel.onmessage = (event) => {
  // We assume that the SET_SUB_TITLE should not be propagated again to avoid loops
  if (event.data.type === "SET_SUB_TITLE") {
    store.dispatch({ ...event.data, skipBroadcast: true });
  }
};
