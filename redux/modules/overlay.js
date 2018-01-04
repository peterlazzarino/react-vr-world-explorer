const initialState = {
    selectedTourLocation: undefined,
}

const ActionType = {
    SELECT_TOUR_LOCATION: 'SELECT_TOUR_LOCATION'
}

export const selectLocation = (location) => {
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
        default:
            return state;
    }
}