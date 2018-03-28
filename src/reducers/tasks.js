const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {

        case 'SET_TASKS' :
            return action.payload.tasks;

        default:
            return state;
    }
}
