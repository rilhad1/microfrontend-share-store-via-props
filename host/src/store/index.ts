import {combineReducers, compose, configureStore} from '@reduxjs/toolkit'
import {ExtendedStore} from "../@types";
import {UnknownAction} from "redux";

// import { combineReducers, createStore, compose } from 'redux';
//
const initialState = {
    title: 'DEFAULT HOST APP TITLE',
    subtitle: 'Default host APP sub title',
};

const hostReducer = (state = initialState, action: UnknownAction) => {
    switch (action.type) {
        case 'SET_DEFAULT': return initialState;
        case 'SET_TITLE': return {...state, title: action.payload}
        case 'SET_SUB_TITLE': return {...state, subtitle: action.payload}
        default:
            return state;
    }
};

const staticReducers = {
    host: hostReducer,
};

/**
 * Cf. redux docs:
 * https://redux.js.org/recipes/code-splitting/#defining-an-injectreducer-function
 */


export default function configureAppStore(initialState = {}) {
    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : compose;

    const store = configureStore({
        reducer: createReducer(),
        // enhancers: composeEnhancers()
    }) as ExtendedStore;

    store.asyncReducers = {};

    store.injectReducer = (key, asyncReducer) => {
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(createReducer(store.asyncReducers));
    };

    return store;

}

function createReducer(asyncReducers = {}) {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers,
    });
}

export const store = configureAppStore();
