import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../action/userAction';
import Item from './Item';
import Result from './Result';
import Header from './Header';



class Input extends React.Component {

  onClickSave(event) {
    event.preventDefault();
    var form = {
      name: this.name.value,
      age: this.age.value,
      company: this.company.value,
      empId: this.empId.value
    };

    this.props.action.addNewUser(form);
  }

  render() {
    return (
      <div className='row'>
      <Header />
      <div className='col-md-4 col-md-offset-4'><center> <h1>To Do List</h1>
        <form onSubmit={this.onClickSave.bind(this)} className="form-group" >
          <div><input type="text" placeholder="Name" className="form-control" ref={(name) => { this.name = name } } /></div>
          <div><input type="text" placeholder="Age" className="form-control" ref={(age) => { this.age = age } } /></div>
          <div><input type="text" placeholder="Company Name" className="form-control" ref={(company) => { this.company = company } } /></div>
          <div><input type="text" placeholder="Employee Id" className="form-control" ref={(empId) => { this.empId = empId } } /></div>
          <div><button type="submit" class="btn btn-success">Register</button></div>
        </form>
        </center>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Input);