import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducer from './reducers';
import createHistory from 'history/createBrowserHistory'

const middleware = applyMiddleware(promise(), thunk, logger());

export default function configureStore(initialState){
  return createStore(reducer,initialState,middleware);
}