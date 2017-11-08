import React from 'react';
import Item from './Item';
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import * as todoAction from "../action/todoAction";
import * as removeAction from "../action/removeToDoAction";
class Input extends React.Component {
    state={todo:{title:""}};

 onTitleChange(event){
const todo=this.state.todo;
todo.title=event.target.value;
this.setState({todo:todo});
 } 

 onClickSave(){
this.props.action.addToDo(this.state.todo); 
 }  
 
 todoItem(item,index){
     return <div key={index}>{item.title}<button 
     onClick={this.props.action2.removeToDo(this.state.todo) }>Remove</button></div>
 }
 
render(){
    return(
        <div>
        <h1>To Do List</h1>
<input type="text" placeholder="Title" onChange={this.onTitleChange.bind(this)} value={this.state.todo.title}/>
<input type="submit" value="Save" onClick={this.onClickSave.bind(this)}/>
{this.props.todo.map(this.todoItem)}
        </div>   
    );
}}

function mapStateToProps(state, ownProps){
    return{
        todo:state.todo
    };
}
function mapDispatchToProps(dispatch){
    return{action:bindActionCreators(todoAction,dispatch),
        action2:bindActionCreators(removeAction,dispatch)
    };
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Input);