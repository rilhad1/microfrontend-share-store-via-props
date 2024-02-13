import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
const HomeContent = () => {
    const dispatch = useDispatch();
    const { title } = useSelector((state) => {
        console.log('state', state);
        // @ts-ignore
        return state.app1 || {};
    });
    const changeHandler = () => {
        dispatch({ type: 'SET_TITLE', payload: 'FROM APP 1' });
    };
    return (_jsxs("div", Object.assign({ style: { backgroundColor: '#8dbf4c', padding: '10px' } }, { children: [_jsx("h1", { children: `App-1 --- ${title !== null && title !== void 0 ? title : ''}` }), _jsx("button", Object.assign({ onClick: changeHandler }, { children: "Change title" }))] })));
};
const initialState = { title: 'APP 1 TITLE' };
const app1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_APP1_TITLE': return Object.assign(Object.assign({}, state), { title: action.payload });
        default:
            return state;
    }
};
const Home = (props) => {
    useEffect(() => {
        props.store.injectReducer('app1', app1Reducer);
    }, [props.store]);
    return _jsx(Provider, Object.assign({ store: props.store }, { children: _jsx(HomeContent, {}) }));
};
export default Home;
