import { ApiReal } from 'api/Api';
import { setMessage } from './ui';

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
    .then((data) =>
        new Promise ((resolve) => {
            dispatch({
                type: 'SET_TASKS',
                payload: {
                    tasks: data.data
                }
            });

            resolve();
        })
    )
    .then(ApiReal.get_list_names)
    .then((data) =>
        new Promise ((resolve) => {
            dispatch({
                type: 'SET_LISTS',
                payload: {
                    data: data.lists
                }
            });

            resolve();
        })
    )
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

export const addList = ({group, task_name, alias}) => (dispatch) => {
    ApiReal.add_list({group, task_name, alias})
    .then((data) =>
        new Promise ((resolve) => {
            if (data.data) {
                dispatch({
                    type: 'ADD_LIST',
                    payload: {
                        data: data.data
                    }
                });
                dispatch(filterTasks());
            }
            else if (data.error) {
                dispatch(setMessage(data.error, 'success'))
            }

            // dispatch(setPopupContent(null));

            resolve();
        })
    )
    .catch((err) => {
        console.error(err);
    });
};

export const removeList = ({group, task_name, alias}) => (dispatch) => {
    ApiReal.remove_list({group, task_name, alias})
    .then((data) =>
        new Promise ((resolve) => {
            if (data.data) {
                dispatch({
                    type: 'REMOVE_LIST',
                    payload: {
                        data: data.data
                    }
                });
                dispatch(filterTasks());
            }
            else if (data.error) {
                dispatch(setMessage(data.error, 'success'))
            }

            resolve();
        })
    )
    .catch((err) => {
        console.error(err);
    });
};

