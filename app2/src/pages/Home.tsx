import React, {FC} from "react";
import {useDispatch} from "react-redux";

const HomeContent = () => {
    const dispatch = useDispatch();
    const changeHandler = () => {
        dispatch({type: 'SET_SUB_TITLE', payload: 'FROM APP 2'})
    }
    const changeApp1Title = () => {
        dispatch({type: 'SET_APP1_TITLE', payload: 'App1 title changed from HOST app'})
    }
    return (
        <div style={{backgroundColor: '#4CB2BF', padding: '10px'}}>
            <h1> App-2 --- Home page</h1>
            <button onClick={changeHandler}>Change subTitle</button>
            <button onClick={changeApp1Title}>Change app 1 title</button>

        </div>
    );
}
const Home: FC<any> = (props) => {
    return <HomeContent />
};

export default Home;
