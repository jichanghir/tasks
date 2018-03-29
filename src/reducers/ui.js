const defaultState = {
    popupContent: null
}

export default (state = defaultState, action) => {
    switch (action.type) {

        case 'SET_POPUP_CONTENT' :
            return {...state, popupContent: action.payload.data}

        default :
            return state;
    }
}
