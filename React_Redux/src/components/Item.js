import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../action/userAction';
import Header from './Header';
class Item extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <Header />
                <center>
                    <h3>
                        <table>
                            <tr><td><div>Name:{this.props.form.name}</div></td></tr>
                            <tr><td><div>Age:{this.props.form.age}</div></td></tr>
                            <tr><td><div>Company Name:{this.props.form.company}</div></td></tr>
                            <tr><td><div>Employee Id:{this.props.form.empId}</div></td></tr>
                        </table>
                    </h3>
                </center>
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
export default connect(mapStateToProps, mapDispatchToProps)(Item);