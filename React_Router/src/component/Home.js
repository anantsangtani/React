import React from 'react';
import Header from './Header';
import axios from 'axios';
export default class Home extends React.Component{
 
  constructor(props){
    super(props);
    this.state={firstName: ""};
    this.postJson=this.postJson.bind(this);
    }
  
  postJson(event){
      event.preventDefault();
      axios.post('http://localhost:3000/user', {name: this.state.firstName})
      .then(function (response) {
      console.log(response);
  })
      .catch(function (error) {
      console.log(error);
  });}

  render(){
      return( 
         <div>
         <Header />
         <h1>HOME</h1>
         <form onSubmit={this.postJson}>
         <input type="text" placeholder="Enter Name" value={this.state.firstName} 
              onChange={(event) => this.setState({firstName: event.target.value})}/>
         <input type="submit" value="Post"/>
         </form>
         </div>
           )
    }
}