const defaultState = {
    filter: '',
    tasksLimit: 25,
    page: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER' :
            return {...state, filter: action.payload.data}

        case 'SET_TASKS_LIMIT' :
            return {...state, tasksLimit: action.payload.data}

        default :
            return state;
    }
}
