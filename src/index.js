import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppComponent from './components/Input';
import configureStore from './store';
const store=configureStore();
ReactDOM.render(<Provider store={store}><AppComponent /></Provider>, document.getElementById('root'));