import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import {createLogger} from 'redux-logger';

//import ReduxThunk from 'redux-thunk';
//import { createPromise } from 'redux-promise-middleware'    // redux-thunk 대신 사용할 미들웨어

import penderMiddleware from 'redux-pender';                    // 최종 사용 미들웨어;

const logger = createLogger();
const store = createStore(modules,applyMiddleware(logger,penderMiddleware()));

export default store;