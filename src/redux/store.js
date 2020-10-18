import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';

import combineReducer from './root-reducer'

const middlewares = [logger];

const store = createStore(combineReducer, applyMiddleware(...middlewares));

export default store;
