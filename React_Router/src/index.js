import React from'react';
import {render} from 'react-dom';
import {Router, Route,browserHistory} from 'react-router';

import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import User from './component/User';
render((
    <Router history={browserHistory}>
    <Route path='/' component={Home}/> 
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
     <Route path='/user' component={User}/>
    </Router>
), document.getElementById("root"));
