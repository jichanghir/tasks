import { ApiReal } from 'api/Api';

export const filterTasks = (filter) => ({
    type: 'FILTER_TASKS',
    payload: {
        filter
    }
});

export const setCurrentPage = (value) => ({
    type: 'SET_CURRENT_PAGE',
    payload: {
        data: value
    }
})

export const getTasks = () => (dispatch) => {

    ApiReal.get_cfg()
    .then((data) => {
        console.log("data", data);

        dispatch({
            type: 'SET_TASKS',
            payload: {
                tasks: data.data
            }
        });
    })
    .catch((err) => {
        console.error(err);
    });
};

export const setTaskLimit = (value) => (dispatch) => {
    dispatch({
        type: 'SET_TASKS_LIMIT',
        payload: {
            data: +value
        }
    });

    dispatch(setCurrentPage(1));
};

export const setFilter = (value) => (dispatch) => {
    dispatch({
        type: 'SET_FILTER',
        payload: {
            data: value
        }
    });

    dispatch(filterTasks(value));
    dispatch(setCurrentPage(1));
}
