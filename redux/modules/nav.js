
const initialState = {
    locations : [{
        name: "Iceland",
        coordinates: { lat: 64.9631, lon: 19.0208 }
    },{
        name: "United States",
        coordinates: { lat: 37.0902, lon: 95.7129 }
    },{
        name: "Peru",
        coordinates: { lat: -9.1900, lon: 75.0152 }
    },{
        name: "Antarctica",
        coordinates: { lat: -82.8628, lon: -135.0000 }
    }]
}

export default function navReducer(state = initialState, action) { 
    switch(action.type){
        default: 
            return state;
    }
}