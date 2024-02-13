import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const HomeContent = () => {
    const dispatch = useDispatch();
    const {title} = useSelector((state) => {
        console.log('state', state)
        // @ts-ignore
        return state.app1 || {} ;
    })
    const changeHandler = () => {
        dispatch({type: 'SET_TITLE', payload: 'FROM APP 1'})
    }
    return (
        <div style={{backgroundColor: '#8dbf4c', padding: '10px'}}>
            <h1>{`App-1 --- ${title ?? ''}`}</h1>
            <button onClick={changeHandler}>Change title</button>
        </div>
    );
}

const initialState = {title: 'APP 1 TITLE'}
const app1Reducer = (state: any = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'SET_APP1_TITLE': return {...state, title: action.payload};
        default:
            return state;
    }
};

const Home: FC<any> = (props) => {
    return <HomeContent />
};

export default Home;
