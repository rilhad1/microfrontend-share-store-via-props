import Home from "./pages/Home";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

// @ts-ignore
const App = () => {
  const [remoteStore, setRemoteStore] = useState(null);
  useEffect(() => {
    // @ts-ignore
    import("storeApp/store").then((res) => {
      setRemoteStore(res.store);
    });
  }, []);
  return !remoteStore ? (
    <div>LOADING STORE</div>
  ) : (
    <Provider store={remoteStore}>
      {" "}
      <Home />
    </Provider>
  );
};

export default App;
