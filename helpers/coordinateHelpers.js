export const to3dLocation = (coords, radius) => {
    //remove hardcoded 90 rotation value
    const modLon = coords.lon + 90;
    var cosLat = Math.cos(toRadians(coords.lat));
    var sinLat = Math.sin(toRadians(coords.lat))
    var cosLon = Math.cos(toRadians(modLon))
    var sinLon = Math.sin(toRadians(modLon))
    return [
        radius * cosLat * sinLon, 
        radius * sinLat,
        radius * cosLat * cosLon
    ];
}

export const midpoint = (coord1, coord2, percent) => {
    var midpoint = { coordinates : {lat : coord1.lat + (coord2.lat - coord1.lat) * percent, lon: coord1.lon + (coord2.lon - coord1.lon) * percent }};
    return midpoint;
}

export const toRadians = (angle) => {
    return angle * (Math.PI / 180);
}

export const getRelativeLineVertex = (location3dCoords, nextLocation, radius) => {
    let nextLocation3dCoords = to3dLocation(nextLocation.coordinates, radius);
    return [
        nextLocation3dCoords[0] - location3dCoords[0],
        nextLocation3dCoords[1] - location3dCoords[1], 
        nextLocation3dCoords[2] - location3dCoords[2]
    ]
}