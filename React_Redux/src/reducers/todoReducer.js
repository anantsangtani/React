export default function reducer(state =[], action){
	switch(action.type){
		case "ADD_TODO":return [...state, Object.assign({},action.todo)]
		case "REMOVE_TODO":return [...state, Object.assign({},action.todo)]
	default:return state;
}}