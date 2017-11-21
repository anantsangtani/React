import React from 'react';
import Header from './Header';
import axios from 'axios';
import Request from 'react-http-request';
export default class User extends React.Component{
  constructor(props){
    super(props);
    this.state={firstName: ''}
 }

  getName(){
     axios.get('http://localhost:3000/user')
    .then( (response) => {
    console.log(response);
    this.setState({firstName:response.data.name});
  })
    .catch((error) => {
    console.log(error);
  }); }

  render(){
       return(
            <div>
            <Header />
            <button onClick={this.getName.bind(this)}>GET</button>
            <div>
             {this.state.firstName}
            </div>
            </div>
            );
    }
}