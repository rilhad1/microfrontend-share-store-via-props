import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { app2Reducer } from "./reducer";

const createCrossMfMiddleware = (channelName: string) => {
  const broadcastChannel = new BroadcastChannel(channelName);

  return (store: any) => (next: (ac: any) => any) => (action: any) => {
    if (action.skipBroadcast) return next(action);
    broadcastChannel.postMessage(action);

    return next(action);
  };
};

export const store = configureStore({
  reducer: combineReducers({ app2: app2Reducer }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createCrossMfMiddleware("APP_2_CHANEL")),
});

const broadcastApp1Channel = new BroadcastChannel("APP_1_CHANEL");
broadcastApp1Channel.onmessage = (event) => {
  // We assume that the SET_APP_2_TITLE should not be propagated again to avoid loops
  if (event.data.type === "SET_APP_2_TITLE") {
    store.dispatch({ ...event.data, skipBroadcast: true });
  }
};
