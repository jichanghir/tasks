const defaultState = [];

export default (state = defaultState, action) => {
    console.log("action", action);
    switch (action.type) {

        case 'SET_LISTS' : {
            return action.payload.data
        }

        default :
            return state;
    }
}
