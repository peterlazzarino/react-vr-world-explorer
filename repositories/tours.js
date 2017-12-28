const lpr = { 
    locations: [ {
        location: "Rome",
        coordinates: { lat: 41.9128, lon: 12.4964 }
    }, {
        location: "Paris",
        coordinates: { lat: 48.8566, lon: 2.3522 }
    }, {
        location: "London",
        coordinates: { lat: 51.5074, lon: 0.1278 }
    }]
};

const usa = { 
    locations: [ {
        location: "NYC",
        coordinates: { lat: 40.7128, lon: -74.0060 }
    }, {
        location: "Kansas",
        coordinates: { lat: 39.0119, lon: -98.4842 }
    }]
};

export const getByLocation = (location) => {
    location = location.toLowerCase();
    switch (location){
        case "italy":
            return [lpr];
        case "united states":
            return [usa];
    }
}