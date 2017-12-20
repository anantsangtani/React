
export default function reducer(state = {}, action) {
	switch (action.type) {
		case "USER_LOGIN_SUCCESS": state = Object.assign({}, state, action.payload);;
			break;
		case "USER_LOGIN_FAIL": alert(action.payload);
			break;
		case "USER_REJECTED": state = state; alert(action.payload);
			break;
		case "USER_LOGOUT": state = Object.assign({}, state, action.payload); alert("Logout Successfully");
			break;
		default: state;
	}
	return state;
}