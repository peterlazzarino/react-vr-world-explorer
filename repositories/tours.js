const lpr = { 
    locations: [{
        location: "London",
        nights: 2,
        coordinates: { lat: 51.5074, lon: 0.1278 }
    }, {
        location: "Paris",
        nights: 2,
        coordinates: { lat: 48.8566, lon: 2.3522 }
    }, {
        location: "Rome",
        nights:2,
        coordinates: { lat: 41.9128, lon: 12.4964 }
    }]
};

const usa = { 
    locations: [ {
        location: "NYC",
        nights:3,
        coordinates: { lat: 40.7128, lon: -74.0060 }
    }, {
        location: "Kansas",
        nights:1,
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