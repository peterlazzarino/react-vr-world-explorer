const lpr = {
    locations: [{
        location: "London",
        meals: {
            dinner: 2,
            breakfast: 2,
            lunch: 2
        },
        days: [{
            number: 1,
            description: "This is a test!"
        }, {
            number: 2,
            description: "This is a test!"
        }],
        coordinates: { lat: 51.5074, lon: 0.1278 }
    }, {
        location: "Paris",
        meals: {
            dinner: 2,
            breakfast: 2,
            lunch: 2
        },
        days: [{
            number: 3,
            description: "This is a test!"
        }, {
            number: 4,
            description: "This is a test!"
        }],
        coordinates: { lat: 48.8566, lon: 2.3522 }
    }, {
        location: "Rome",
        meals: {
            dinner: 2,
            breakfast: 2,
            lunch: 2
        },
        days: [{
            number: 5,
            description: "This is a test!"
        }, {
            number: 6,
            description: "This is a test!"
        }],
        coordinates: { lat: 41.9128, lon: 12.4964 }
    }]
};

const usa = {
    locations: [ {
        location: "NYC",
        meals: {
            dinner: 2,
            breakfast: 2,
            lunch: 2
        },
        days: [{
            number: 1,
            description: "This is a test!"
        }, {
            number: 2,
            description: "This is a test!"
        }, {
            number: 3,
            description: "This is a test!"
        }],
        coordinates: { lat: 40.7128, lon: -74.0060 }
    }, {
        location: "Kansas",
        meals: {
            dinner: 2,
            breakfast: 2,
            lunch: 2
        },
        days: [{
            number: 3,
            description: "This is a test!"
        }, {
            number: 4,
            description: "This is a test!"
        }, {
            number: 5,
            description: "This is a test!"
        }],
        coordinates: { lat: 39.0119, lon: -98.4842 }
    }]
};

const smb = {
    locations: [{
        location: "Barcelona",
        meals: {
            dinner: 2,
            breakfast: 2,
            lunch: 2
        },
        days: [{
            number: 1,
            description: "This is a test!"
        }, {
            number: 2,
            description: "This is a test!"
        }],
        coordinates: { lat: 41.390205, lon: 2.154007}
    }, {
        location: "Madrid",
        meals: {
            dinner: 2,
            breakfast: 2,
            lunch: 2
        },
        days: [{
            number: 3,
            description: "This is a test!"
        }, {
            number: 4,
            description: "This is a test!"
        }],
        coordinates: { lat: 40.416775, lon: -3.703790}
    }, {
        location: "Seville",
        meals: {
            dinner: 2,
            breakfast: 2,
            lunch: 2
        },
        days: [{
            number: 5,
            description: "This is a test!"
        }, {
            number: 6,
            description: "This is a test!"
        }],
        coordinates: { lat: 37.392529, lon: -5.994072}
    }]
}

const ice = {
    locations: [{
        location: "Reykjavik",
        meals: {
            dinner: 2,
            breakfast: 2,
            lunch: 2
        },
        days: [{
            number: 5,
            description: "This is a test!"
        }, {
            number: 6,
            description: "This is a test!"
        }],
        coordinates: { lat: 64.1333328, lon: -21.93332960, }
    }, {
        location: "Húsafell",
        meals: {
            dinner: 2,
            breakfast: 2,
            lunch: 2
        },
        days: [{
            number: 5,
            description: "This is a test!"
        }, {
            number: 6,
            description: "This is a test!"
        }],
        coordinates: { lat: 64.699512, lon: -20.870392, }
    }, ]
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
        case "iceland":
            return [ice];
    }
}