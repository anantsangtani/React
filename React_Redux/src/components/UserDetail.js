import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../action/userAction';
import Header from './Header';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class UserDetail extends React.Component {

    onClickSave1(event) {
        event.preventDefault();
        var userForm1 = {
            name: this.name.value,
            lastname: this.lastname.value,
            email: this.email.value
           
        };

        this.props.action.userDetail(userForm1);

    }
     onClickSave2(event) {
        event.preventDefault();
        var userForm2 = {
           
            address: this.address.value,
            company: this.company.value
        };

        this.props.action.userDetail(userForm2);

    }

    nextPage() {
        this.props.action.changePage(1);
    }
    prevPage() {
        this.props.action.changePage(-1);
    }
    shareDetails() {
        this.props.action.shareDetail(true);
    }
    render() {
        var form = null;
        var button = null;
        if (this.props.pageNumber.page === 2) {
            form = form = <div>
                <form onSubmit={this.onClickSave2.bind(this)} className="form-group" ref="form" >
                    <table>
                        <tr>
                            <td><b>Address:&nbsp;</b></td><td><input type="text" placeholder={this.props.details.address} className="form-control" ref={(address) => { this.address = address } } /></td>
                        </tr>
                        <tr>
                            <td><b>Company:&nbsp;</b></td><td><input type="text" placeholder={this.props.details.company} className="form-control" ref={(company) => { this.company = company } } /></td>
                        </tr>
                    </table> <br />
                    <div>
                        <button type="submit" className="btn btn-success">Save</button>&nbsp;&nbsp;
                        <button type="button" className="btn btn-success" onClick={this.shareDetails.bind(this)}>Share</button>&nbsp;&nbsp;
                                  <button type="button" className="btn btn-success" onClick={this.prevPage.bind(this)}>Previous</button>

                    </div>



                </form></div>;

        }
        else {
            form = <div>
                <form onSubmit={this.onClickSave1.bind(this)} className="form-group" ref="form" >
                    <table>
                        <tr>
                            <td><b>Name:&nbsp;</b></td><td><input type="text" placeholder={this.props.details.name} className="form-control" ref={(name) => { this.name = name } } /></td>
                        </tr>
                        <tr>
                            <td><b>Last Name:&nbsp;</b></td><td><input type="text" placeholder={this.props.details.lastname} className="form-control" ref={(lastname) => { this.lastname = lastname } } /></td>
                        </tr>
                        <tr>
                            <td><b>Email:&nbsp;</b></td><td><input type="text" placeholder={this.props.details.email} className="form-control" ref={(email) => { this.email = email } } /></td>
                        </tr>  </table><br />
                    <div>
                        <button type="submit" className="btn btn-success">Save</button>&nbsp;&nbsp;
                        <button type="button" className="btn btn-success" onClick={this.shareDetails.bind(this)}>Share</button>&nbsp;&nbsp;
                         <button type="button" className="btn btn-success" onClick={this.nextPage.bind(this)}>Next</button>

                    </div>



                </form></div>;

        }
        return (
            <div className='col-md-4 col-md-offset-4'> <h1>User Details</h1>


                {form}


            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        form: state.user,
        details: state.userDetails,
        pageNumber: state.page
    };
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(userAction, dispatch)

    };

}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);