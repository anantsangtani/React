import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <div className=''>
                <nav className="navbar navbar-default">
                    <div className="container-fluid float-right">
                        <div className="navbar-header">
                            <Link to='/' className="navbar-brand" >GJOW</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/user">User Details</Link></li>
                            <li><Link to="/result">Result</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}