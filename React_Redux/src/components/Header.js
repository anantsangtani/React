import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../action/userAction';

class Header extends React.Component {
    logOut() {
        var newform = {
            userName: '',
           };
        this.props.action.logoutUser(newform);

    }
    render() {
        var logout = null;
        if (this.props.form.userName) {
            logout = <ul class="nav navbar-nav navbar-right">
                <li><a onClick={this.logOut.bind(this)}><span class="glyphicon glyphicon-log-out"></span>Logout</a></li>
            </ul>;
        }
        return (
            <div className=''>
                <nav className="navbar navbar-default">
                    <div className="container-fluid float-right">
                        <div className="navbar-header">
                            <Link to='/' className="navbar-brand" >POC</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/user">User Details</Link></li>
                        </ul>
                        {logout}
                    </div>
                </nav>
            </div>
        )
    }

} function mapStateToProps(state) {
    return {
        form: state.user
    };
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(userAction, dispatch)

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);