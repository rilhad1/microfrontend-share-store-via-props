import React, { Suspense, lazy } from 'react';
import {store} from "../store";
import {useDispatch, useSelector} from "react-redux";

// @ts-expect-error app1/App1Home is a federated module.
const RemoteApp1 = lazy(() => import('app1/App1Home'));
// @ts-expect-error app2/App2Home is a federated module.
const RemoteApp2 = lazy(() => import('app2/App2Home'));

const Home = () => {
    const dispatch = useDispatch();
    const {title, subtitle} = useSelector((state) => {
        // @ts-ignore
        return state.host;
    })
    const handleClick = () => {
        dispatch({type: 'SET_DEFAULT'})
    }
    const changeApp1Title = () => {
        dispatch({type: 'SET_APP1_TITLE', payload: 'App1 title changed from HOST app'})
    }
  return (
    <div style={{backgroundColor: '#cccccc'}}>
      <header>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
      </header>
        <button onClick={handleClick}>Set default titles</button>
        <button onClick={changeApp1Title}>Change app 1 title</button>
        <div style={{padding: '20px', marginTop: '30px', backgroundColor: '#bbb'}}>
        <Suspense fallback="Loading RemoteApp1...">
            <RemoteApp1 store={store} />
        </Suspense>
        <Suspense fallback="Loading RemoteApp2...">
            <RemoteApp2 store={store} />
        </Suspense>
        </div>
    </div>
  );
};

export default Home;
