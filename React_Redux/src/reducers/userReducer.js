export default function reducer(state = {}, action) {
	switch (action.type) {
		case "ADD_USER": state = Object.assign({}, state, action.payload);
			break;
		case "REMOVE_TODO": state = { ...state, item: [...state.item.slice(0, action.payload), ...state.item.slice(action.payload + 1)] }
			break;
		case "USER_REJECTED": state=state ; alert(action.payload);
			break;
		default: state;
	}
	return state;
}