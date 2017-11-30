import axios from 'axios';

export function addNewUser(form){
  return function(dispatch){

axios.post('http://localhost:3000/user', {form})
      .then(function (response) {
     dispatch({type:'ADD_USER',payload:form})
  })
      .catch(function (error) {
   dispatch({type:'USER_REJECTED',payload:error})
  });


  }


 
}
export function removeToDo(index){
  return{type:'REMOVE_TODO',payload:index};
}