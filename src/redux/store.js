import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";
import logger from 'redux-logger';
import thunk from "redux-thunk";

import combineReducer from './root-reducer'

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(combineReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)

export default {store, persistor};
