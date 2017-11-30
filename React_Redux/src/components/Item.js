import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../action/userAction';
import Header from './Header';
class Item extends React.Component {
    render() {
        return (
            <div>
             <Header />
                <div>Name:{this.props.form.name}</div>
                <div>Age:{this.props.form.age}</div>
                <div>Company Name:{this.props.form.company}</div>
                <div>Employee Id:{this.props.form.empId}</div>
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