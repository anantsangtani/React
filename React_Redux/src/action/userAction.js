import axios from 'axios';
import { browserHistory } from 'react-router';






export function userLogin(form) {
  return function (dispatch) {
    axios.post('http://localhost:3000/user', { form })
      .then(function (response) {
        if (response.data) {
          dispatch({ type: 'USER_LOGIN_SUCCESS', payload: form });

          // browserHistory.push('/user');
        }
        else {
          dispatch({ type: 'USER_LOGIN_FAIL', payload: "Invalid Username/Password" })
        }

      })
      .catch(function (error) {
        dispatch({ type: 'USER_REJECTED', payload: error })
      });
  }
}


export function logoutUser(form) {
  return function (dispatch) {
    axios.post('http://localhost:3000/user', { form })
      .then(function (response) {
        dispatch({ type: 'USER_LOGOUT', payload: form })
        browserHistory.push('/');
      })
      .catch(function (error) {
        dispatch({ type: 'USER_REJECTED', payload: error })
      });
  }
}



export function userDetail(form) {
  return function (dispatch) {
    axios.post('http://localhost:3000/userdetails', { form })
      .then(function (response) {
        dispatch({ type: 'ALERT_USER', payload: "Saved Successfully" })
      })
      .catch(function (error) {
        dispatch({ type: 'USER_REJECTED', payload: error })
      });
  }
}

export function componentFetchRequest() {
  return function (dispatch) {
    axios.get('http://localhost:3000/userdetails')
      .then(function (response) {
        if (response.data) {
          dispatch({ type: 'FETCH_USER_DETAILS', payload: response.data });
      
        }
        else {
          
        }
      })
      .catch(function (error) {
        dispatch({ type: 'USER_REJECTED', payload: error })
      });
  }
}


export function fetchRequest() {
  return function (dispatch) {
    axios.get('http://localhost:3000/userdetails')
      .then(function (response) {
        if (response.data) {
          dispatch({ type: 'FETCH_USER_DETAILS', payload: response.data });
       browserHistory.push('/result');
        }
        else {
          dispatch({ type: 'ALERT_USER', payload: "No Data Shared" })
        }
      })
      .catch(function (error) {
        dispatch({ type: 'USER_REJECTED', payload: error })
      });
  }
}


export function shareDetail(flag) {
  return function (dispatch) {
    axios.post('http://localhost:3000/sharedetails', { flag })
      .then(function (response) {
        dispatch({ type: 'ALERT_USER', payload: "User Details Shared" })
      })
      .catch(function (error) {
        dispatch({ type: 'USER_REJECTED', payload: error })
      });
  }
}

export function changePage(page) {
  return function (dispatch) {
    axios.post('http://localhost:3000/page', { page })
      .then(function (response) {
        dispatch({ type: 'CHANGE_PAGE', payload: response.data })
      })
      .catch(function (error) {
        dispatch({ type: 'USER_REJECTED', payload: error })
      });
  }
}


export function fetchComment() {
  return function (dispatch) {
    axios.get('http://localhost:3000/comment')
      .then(function (response) {
        console.log("cccccccccccccccccccc",response.data);
        dispatch({ type: 'FETCH_COMMENTS', payload:response.data  });
         browserHistory.push('/comment');
      })
      .catch(function (error) {
        dispatch({ type: 'USER_REJECTED', payload: error })
      });
  }
}