import React from 'react';
import Header from './Header';
import Demo from './demo';
export default class About extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <Demo city="Indore"/>
            <h1>About</h1></div>
            )
    }
}