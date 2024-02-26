import { Provider } from "react-redux";
import Home from "./pages/Home";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>app1 Website</h1>
        <Home />
      </div>
    </Provider>
  );
};

export default App;
