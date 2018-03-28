import { ApiReal } from 'api/Api';

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
