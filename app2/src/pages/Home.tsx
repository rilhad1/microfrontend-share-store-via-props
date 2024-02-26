import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomeContent = () => {
  const dispatch = useDispatch();
  const changeHostSubtitle = () => {
    dispatch({ type: "SET_SUB_TITLE", payload: "From - Second APP" });
  };
  const title = useSelector((state) => {
    // @ts-ignore
    return state.app2.title;
  });

  const changeApp1Title = () => {
    dispatch({
      type: "SET_APP_1_TITLE",
      payload: "App1 title changed from APP2 app",
    });
  };

  const setDefaultTitle = () => {
    dispatch({ type: "SET_DEFAULT_APP_2" });
  };
  return (
    <div style={{ backgroundColor: "#4CB2BF", padding: "10px" }}>
      <h1> App-2 --- {title}</h1>
      <button onClick={setDefaultTitle}>Set DEFAULT</button>
      <button onClick={changeHostSubtitle}>Change HOST subTitle</button>
      <button onClick={changeApp1Title}>Change APP_1 title</button>
    </div>
  );
};
const Home: FC<any> = () => {
  return <HomeContent />;
};

export default Home;
