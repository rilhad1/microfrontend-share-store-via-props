import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Home from "./pages/Home";

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
      <div>
        <h1>app1 Website</h1>
        <Home />
      </div>
    </Provider>
  );
};

export default App;
