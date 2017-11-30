import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Input from './components/Input'
import Item from './components/Item'
import Result from './components/Result'
import reducers from './reducers'
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import configureStore from './store';



const store=configureStore();
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>

        <Router history={history}>
            <Route path='/' component={Input} />
            <Route path='/user' component={Item} />
            <Route path='/result' component={Result} />

        </Router>
    </Provider>,
    document.getElementById('root')
)

