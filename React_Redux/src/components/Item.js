import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../action/userAction';
import Header from './Header';
import UserDetail from './UserDetail';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
class Item extends React.Component {
    componentDidMount(){
         this.props.action.componentFetchRequest();
    }
   

    fetchRequest() {
        this.props.action.fetchRequest();
       

    }
   

    render() {
        let output = null;

        if (!this.props.form.userName) {
            output = <div>No User Logged In <Link to="/"> <a>Login</a></Link> </div>;
        }
        else {
            if (this.props.form.userName === "user") {
                output = <UserDetail />;
            }
            else {
                output = <div> Welcome Admin <button onClick={this.fetchRequest.bind(this)}>View User Request</button></div>
            }

        }
        return (
            <div className="panel panel-default">
                <Header />
                <center>
                    <h3>
                        {output}
                    </h3>
                </center>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        form: state.user,
        details: state.userDetails
    };
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(userAction, dispatch)

    };

}
export default connect(mapStateToProps, mapDispatchToProps)(Item);