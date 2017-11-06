import React from 'react';
class Item extends React.Component {
render(){
    return(
        <div>
     {this.props.list.title}
        </div>   
    );
}


}
export default Item;