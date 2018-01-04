
import { getByLocation } from "../../repositories/tours";
import { calculateZoom } from "../../helpers/locationZoomRatio";
import { distanceBetweenPoints, midpoint } from "../../helpers/coordinateHelpers"

const initialState = {
    selectedLocation: undefined,
    locations : [{
        name: "Iceland",
        coordinates: { lat: 64.9631, lon: -19.0208 }
    },{
        name: "United States",
        coordinates: { lat: 37.0902, lon: -95.7129 }
    },{
        name: "Italy",
        coordinates: { lat: 41.8719, lon: 12.5674 }
    },{
        name: "Antarctica",
        coordinates: { lat: -82.8628, lon: 135.0000 }
    },{
        name: "Spain",
        coordinates: { lat: 40.416775, lon: 3.703790 }
    }]
}

const ActionType = {
    SELECT_LOCATION: 'SELECT_LOCATION',
    REMOVE_LOCATION: 'REMOVE_LOCATION'
}

export const removeLocation = () => {
    return {
        type: ActionType.REMOVE_LOCATION,
        data: undefined
    }
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
            const selectedTour = getByLocation(action.data.name)[0];
            const firstLocation = selectedTour.locations[0].coordinates;
            const lastLocation = selectedTour.locations[selectedTour.locations.length - 1].coordinates;
            const focalPoint = midpoint(firstLocation, lastLocation, .5);
            const distance = distanceBetweenPoints(firstLocation, lastLocation, 1.5);
            const zoomLevel = calculateZoom(distance);
            console.log(zoomLevel)
            return Object.assign({}, state, {
                selectedLocation: action.data,
                selectedTour: selectedTour,
                focalPoint: focalPoint,
                zoomLevel: zoomLevel,
                tourDistance: distance
            });
        case ActionType.REMOVE_LOCATION:
            return Object.assign({}, state, {
                selectedLocation: undefined,
                tours: undefined
            });
        default:
            return state;
    }
}