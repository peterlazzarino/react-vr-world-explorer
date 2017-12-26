const ActionType = {
    SPIN_TO: 'SPIN_TO',
    START_SPIN: 'START_SPIN',
    FINISH_SPIN: 'FINISH_SPIN'
}

const initialState = {
    isSpinning: false,
    fullSpinRequested: false,
    spinLocation: undefined
}

export default function earthReducer(state = initialState, action) { 
    switch(action.type){
        case ActionType.SPIN_TO:
            return Object.assign({}, state, {
                isSpinning: false,
                fullSpinRequested: true,
                spinLocation: action.data
            });
        case ActionType.START_SPIN:
            return Object.assign({}, state, {
                isSpinning: true,
                fullSpinRequested: false,
                spinLocation: undefined
            });
        default: 
            return state;
    }
}

export const spinTo = (location) => {
    return {
        type: ActionType.SPIN_TO,
        data: location
    }
}

export const startFullSpin = () => {
    return {
        type: ActionType.START_SPIN
    }
}