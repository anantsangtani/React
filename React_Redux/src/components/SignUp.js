import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../action/userAction';
import Item from './Item';
import Result from './Result';
import Header from './Header';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';

class SignUp extends React.Component {
  componentDidMount(){
    
  }

  onClickSave(event) {
    event.preventDefault();
    var userForm = {
      userName: this.userName.value,
      password: this.password.value
    };

    this.props.action.userLogin(userForm);
    this.refs.form.reset();
    
  }
  fetchComments(){
     this.props.action.fetchComment();
  }


  render() {
    let output = null;
    if (!this.props.form.userName) {
      output = <div className='col-md-4 col-md-offset-4'><center> <h1>Sign In</h1>
        <form onSubmit={this.onClickSave.bind(this)} className="form-group" ref="form" >
          <div><input type="text" placeholder="User Name" className="form-control" ref={(userName) => { this.userName = userName } } /></div>
          <div><input type="password" placeholder="Password" className="form-control" ref={(password) => { this.password = password } } /></div>
          <div><button type="submit" className="btn btn-success">Login</button></div>
        </form>
      </center>
      </div>;
    }
    else {
      if(this.props.form.userName === "user"){
 output = <div><h3> <center>Welcome {this.props.form.userName}<br/>
      <Link to="/user"> <a>Fill in You Details</a></Link><br/>
       <a onClick={this.fetchComments.bind(this)}>View Comments</a>
      </center></h3></div>;
      }
      else{
         browserHistory.push('/user');
      }
     
    }
    return (
      <div className='row'>
        <Header />
        {output}
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(userAction, dispatch)

  };

}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);