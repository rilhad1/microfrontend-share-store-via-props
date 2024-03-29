///<reference types="react" />
import "redux";
import { compose } from "@reduxjs/toolkit";
import { AsyncReducers } from "./@types";
//
declare module "app1/App1Home";
declare module "app2/App2Home";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
//
// declare module 'redux' {
//     export interface Store {
//         asyncReducers?: AsyncReducers;
//     }
// }
//
// declare global {
//     interface Window {
//         [key: string]: any; // Allows for indexing with a string to access federated modules
//     }
// }
//
