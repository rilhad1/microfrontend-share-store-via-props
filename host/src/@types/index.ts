

import {Reducer, Store} from 'redux';
import {store} from "../store";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type TAppReducer = Reducer<RootState>

export interface AsyncReducers {
    [key: string]: TAppReducer; // Define the shape of your async reducers
}

export type TInjectReducer = (applicationKey: string, reducers: TAppReducer) => void

// Extend the Store interface from Redux with your custom properties
export interface ExtendedStore extends Store {
    asyncReducers: AsyncReducers;
    injectReducer: TInjectReducer
}
