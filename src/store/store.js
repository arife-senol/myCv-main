import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import logger from "redux-logger";
import reducer from './reducer.js';
import { thunk } from "redux-thunk";



export const myStore = createStore(reducer, applyMiddleware(thunk, logger));


