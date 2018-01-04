const initialState = {
    selectedTourLocation: undefined,
}

const ActionType = {
    SELECT_TOUR_LOCATION: 'SELECT_TOUR_LOCATION',
    REMOVE_TOUR_LOCATION: 'REMOVE_TOUR_LOCATION'
}

export const selectTourLocation = (location) => {
    return {
        type: ActionType.SELECT_TOUR_LOCATION,
        data: location
    }
}

export const removeTourLocation = (location) => {
    return {
        type: ActionType.SELECT_TOUR_LOCATION,
        data: location
    }
}

export default function overlayReducer(state = initialState, action) {
    switch(action.type){
        case ActionType.SELECT_TOUR_LOCATION:
            return Object.assign({}, state, {
                selectedTourLocation: action.data
            });
        case ActionType.REMOVE_TOUR_LOCATION:
            return Object.assign({}, state, {
                selectedTourLocation: undefined
            });
        default:
            return state;
    }
}