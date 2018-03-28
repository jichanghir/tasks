export const setTaskLimit = (value) => ({
    type: 'SET_TASKS_LIMIT',
    payload: {
        data: value
    }
});

export const setFilter = (value) => ({
    type: 'SET_FILTER',
    payload: {
        data: value
    }
});
