const lpr = { 
    locations: [ {
        location: "london",
        coordinates: { lat: 41.9128, lon: 12.4964 }
    }, {
        location: "paris",
        coordinates: { lat: 48.8566, lon: 2.3522 }
    }, {
        location: "rome",
        coordinates: { lat: 51.5074, lon: 0.1278 }
    }]
};

export const getByLocation = (location) => {
    location = location.toLowerCase();
    switch (location){
        case "italy":
            return [lpr];
    }
}