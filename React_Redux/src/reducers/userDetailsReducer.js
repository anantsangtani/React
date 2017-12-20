export default function reducer(state = {pageNumber:""}, action) {
	switch (action.type) {
		case "ALERT_USER":alert(action.payload);
			break;
		case "FETCH_USER_DETAILS": state = Object.assign({}, state, action.payload.form);
			break;
		case "USER_REJECTED": state = state; alert(action.payload);
			break;
		default: state;
	}
	return state;
}