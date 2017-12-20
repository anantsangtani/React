import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../action/userAction';
import { browserHistory } from 'react-router';

class Result extends React.Component {
    refresh() {
        this.props.action.fetchRequest();
    }

    render() {
        var form=null;
         if (this.props.pageNumber.page === 2) {
form=<table>
                                <tr>
                                    <td><b>Address:&nbsp;</b></td><td><input type="text" placeholder="Name" className="form-control" value={this.props.details.address} readonly /></td>
                                </tr>
                                <tr>
                                    <td><b>Company:&nbsp;</b></td><td><input type="text" placeholder="Lastname" className="form-control" value={this.props.details.company} readonly /></td>
                                </tr>
                               
                            </table>;
         }
         else{
form=<table>
                                <tr>
                                    <td><b>Name:&nbsp;</b></td><td><input type="text" placeholder="Name" className="form-control" value={this.props.details.name} readonly /></td>
                                </tr>
                                <tr>
                                    <td><b>Last Name:&nbsp;</b></td><td><input type="text" placeholder="Lastname" className="form-control" value={this.props.details.lastname} readonly /></td>
                                </tr>
                                <tr>
                                    <td><b>Email:&nbsp;</b></td><td><input type="text" placeholder="email" className="form-control" value={this.props.details.email} readonly /></td>
                                </tr>
                            </table>;
         }
        
        return (

            <div className="panel panel-default">
                <Header />
                <center>
                    <h3>
                        <div className='col-md-4 col-md-offset-4'> <h1>User Details</h1>
                            <table>
                                <tr>
                                    <td><b>Name:&nbsp;</b></td><td><input type="text" placeholder="Name" className="form-control" value={this.props.details.name} readonly /></td>
                                </tr>
                                <tr>
                                    <td><b>Last Name:&nbsp;</b></td><td><input type="text" placeholder="Lastname" className="form-control" value={this.props.details.lastname} readonly /></td>
                                </tr>
                                <tr>
                                    <td><b>Email:&nbsp;</b></td><td><input type="text" placeholder="email" className="form-control" value={this.props.details.email} readonly /></td>
                                </tr>
                            </table>
                            <br />
                            <button className="btn btn-success" onClick={this.refresh.bind(this)}>Refresh</button>
                        </div>

                    </h3>
                </center>
            </div>
        );
    }


} function mapStateToProps(state) {
    return {
        details: state.userDetails,
         pageNumber: state.page
    };
}
function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(userAction, dispatch)

    };

}
export default connect(mapStateToProps, mapDispatchToProps)(Result);
