// export const setPopupContent = (data) => ({
//     type: 'SET_POPUP_CONTENT',
//     payload: {
//         data
//     }
// });

const setErrorMessage = (data) => ({
    type: 'SET_MESSAGE',
    payload: new Error(),
    error: true,
    meta: {
        message: data
    }
});

const setSimpleMessage = (data) => ({
    type: 'SET_MESSAGE',
    payload: {},
    error: true,
    meta: {
        message: data
    }
});

export const setMessage = (data, messageType) => (dispatch) => {

    if (messageType === 'error') {
        dispatch(setErrorMessage(data));
        setTimeout(() => dispatch(setSimpleMessage(null)), 3000);
    }
    else if (messageType === 'success') {
        dispatch(setSimpleMessage(data));
        setTimeout(() => dispatch(setSimpleMessage(null)), 3000);
    }


}


