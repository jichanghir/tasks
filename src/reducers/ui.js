const defaultState = {
    messageText: null,
    messageType: null
}

export default (state = defaultState, action) => {
    switch (action.type) {

        case 'SET_MESSAGE' : {
            return {
                ...state,
                messageText: action.meta.message,
                messageType: action.error ? 'error' : 'success'
            }
        }

        default :
            return state;
    }
}
