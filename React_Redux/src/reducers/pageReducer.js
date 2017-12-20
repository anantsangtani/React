export default function reducer(state = {}, action) {
	switch (action.type) {
        case "CHANGE_PAGE":var newState={...state};
        newState =action.payload ;
       
        break;
		default: newState=state;
	}
	 return newState;
}