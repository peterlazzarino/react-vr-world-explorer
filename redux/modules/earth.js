const ActionType = {
    REQUEST_RANDOM_SPIN: 'REQUEST_RANDOM_SPIN',
    START_RANDOM_SPIN: 'START_RANDOM_SPIN',
    FINISH_SPIN: 'FINISH_SPIN'
}

const initialState = {
    isSpinning: false,
    fullSpinRequested: false
}

export default function earthReducer(state = initialState, action) { 
    switch(action.type){
        case ActionType.REQUEST_RANDOM_SPIN:
            return Object.assign({}, state, {
                isSpinning: false,
                fullSpinRequested: true
            });
        case ActionType.START_RANDOM_SPIN:
            return Object.assign({}, state, {
                isSpinning: true,
                fullSpinRequested: false
            });
        default: 
            return state;
    }
}

export const fullSpin = () => {
    return {
        type: ActionType.REQUEST_RANDOM_SPIN
    }
}

export const startFullSpin = () => {
    return {
        type: ActionType.START_RANDOM_SPIN
    }
}