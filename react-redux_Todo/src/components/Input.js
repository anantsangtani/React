import React from 'react';
import Item from './Item';
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import * as todoAction from "../action/todoAction";
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
     return <div key={index}>{item.title}</div>
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
    return{action:bindActionCreators(todoAction,dispatch)
    };
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Input);