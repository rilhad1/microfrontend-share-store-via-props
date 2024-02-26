import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { app1Reducer } from "./reducer";

const createCrossMfMiddleware = (channelName: string) => {
  const broadcastChannel = new BroadcastChannel(channelName);

  return (store: any) => (next: (ac: any) => any) => (action: any) => {
    if (action.skipBroadcast) return next(action);
    broadcastChannel.postMessage(action);

    return next(action);
  };
};

export const store = configureStore({
  reducer: combineReducers({ app1: app1Reducer }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createCrossMfMiddleware("APP_1_CHANEL")),
});

const broadcastApp2Channel = new BroadcastChannel("APP_2_CHANEL");
broadcastApp2Channel.onmessage = (event) => {
  // We assume that the SET_APP_1_TITLE should not be propagated again to avoid loops
  if (event.data.type === "SET_APP_1_TITLE") {
    store.dispatch({ ...event.data, skipBroadcast: true });
  }
};
