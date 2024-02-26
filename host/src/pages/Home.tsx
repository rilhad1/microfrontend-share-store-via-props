import React, { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHostDefaultHandler } from "../store/actions";

// @ts-expect-error app1/App1Home is a federated module.
const RemoteApp1Home = lazy(() => import("app1/App1Home"));
// @ts-ignore @ts-expect-error app1/App1Home is a federated module.
const RemoteApp1 = lazy(() => import("app1/App1"));
// @ts-expect-error app2/App2Home is a federated module.
const RemoteApp2Home = lazy(() => import("app2/App2Home"));
// @ts-ignore @ts-expect-error app2/App2Home is a federated module.
const RemoteApp2 = lazy(() => import("app2/App2"));

const Home = () => {
  const dispatch = useDispatch();
  const { title, subtitle } = useSelector((state) => {
    // @ts-ignore
    return state.host;
  });

  const handleClick = () => dispatch(setHostDefaultHandler());

  const changeApp2Title = () => {
    dispatch({ type: "SET_APP_2_TITLE", payload: "Title set from HOST app" });
  };

  const changeApp1Title = () => {
    dispatch({ type: "SET_APP_1_TITLE", payload: "Title set from HOST app" });
  };

  return (
    <div style={{ backgroundColor: "#cccccc" }}>
      <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>
      <button onClick={handleClick}>Set default titles</button>
      <button onClick={changeApp1Title}>Change APP 1 title</button>
      <button onClick={changeApp2Title}>Change APP 2 title</button>
      <div
        style={{ padding: "20px", marginTop: "30px", backgroundColor: "#bbb" }}
      >
        <Suspense fallback="Loading RemoteApp1...">
          <RemoteApp1 />
          -------------
          {/*<RemoteApp1Home  />*/}
        </Suspense>
        <Suspense fallback="Loading RemoteApp2...">
          <RemoteApp2 />
          -------------
          {/*<RemoteApp2Home  />*/}
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
