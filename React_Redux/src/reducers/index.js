import {combineReducers} from "redux"
import { routerReducer } from 'react-router-redux'
import user from "./userReducer";
import userDetails from "./userDetailsReducer";
import page from "./pageReducer";
export default combineReducers({
	user,userDetails,page,routing:routerReducer
});