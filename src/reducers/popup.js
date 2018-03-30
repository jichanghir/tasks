const defaultState = {
    content: null
}

export default (state = defaultState, action) => {
    switch (action.type) {

        case 'SET_POPUP_CONTENT' :
            return {...state, content: action.payload.data}

        default:
            return state;
    }
}
