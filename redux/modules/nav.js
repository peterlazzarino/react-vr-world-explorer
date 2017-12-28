
import { getByLocation } from "../../repositories/tours";

const initialState = {
    selectedLocation: undefined,
    locations : [{
        name: "Iceland",
        coordinates: { lat: 64.9631, lon: 19.0208 }
    },{
        name: "United States",
        coordinates: { lat: 37.0902, lon: 95.7129 }
    },{
        name: "Italy",
        coordinates: { lat: 41.8719, lon: -12.5674 }
    },{
        name: "Antarctica",
        coordinates: { lat: -82.8628, lon: -135.0000 }
    }]
}

const ActionType = {
    SELECT_LOCATION: 'SELECT_LOCATION'
}

 
export const selectLocation = (location) => {
    return {
        type: ActionType.SELECT_LOCATION,
        data: location
    }
}

export default function navReducer(state = initialState, action) { 
    switch(action.type){
        case ActionType.SELECT_LOCATION:
            return Object.assign({}, state, {
                selectedLocation: action.data,
                tours: getByLocation(action.data.name)
            });
        default: 
            return state;
    }
}