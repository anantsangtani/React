import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component{
    render(){
        return(
            <div>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/user">User</Link></li>
            </ul>
            </div>
        )
    }
}