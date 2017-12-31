const lpr = {
    locations: [{
        location: "London",
        coordinates: { lat: 51.5074, lon: 0.1278 }
    }, {
        location: "Paris",
        coordinates: { lat: 48.8566, lon: 2.3522 }
    }, {
        location: "Rome",
        coordinates: { lat: 41.9128, lon: 12.4964 }
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

const smb = {
    locations: [{
        location: "Barcelona",
        coordinates: { lat: 41.390205, lon: 2.154007}
    }, {
        location: "Madrid",
        coordinates: { lat: 40.416775, lon: -3.703790}
    }, {
        location: "Seville",
        coordinates: { lat: 37.392529, lon: -5.994072}
    }]
}

export const getByLocation = (location) => {
    location = location.toLowerCase();
    switch (location){
        case "italy":
            return [lpr];
        case "united states":
            return [usa];
        case "spain":
            return [smb];
    }
}