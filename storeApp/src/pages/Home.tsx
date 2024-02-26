import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home: FC = () => {
  const dispatch = useDispatch();
  const changeHandler = () => {
    dispatch({ type: "SET_SUB_TITLE", payload: "From - First APP" });
  };
  const title = useSelector((state) => {
    // @ts-ignore
    return state.app1.title;
  });

  const changeApp1Title = () => {
    dispatch({
      type: "SET_APP_2_TITLE",
      payload: "App2 title changed from APP1 app",
    });
  };

  const setDefaultTitle = () => {
    dispatch({ type: "SET_DEFAULT_APP_1" });
  };
  return (
    <div style={{ backgroundColor: "#8dbf4c", padding: "10px" }}>
      <h1> App-1 --- {title}</h1>
      <button onClick={setDefaultTitle}>Set DEFAULT</button>
      <button onClick={changeHandler}>Change HOST subTitle</button>
      <button onClick={changeApp1Title}>Change APP_2 title</button>
    </div>
  );
};

export default Home;
