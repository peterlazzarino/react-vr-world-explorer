import { overlayLonOffset } from "../consts/rotationOffset";

export const to3dLocation = (coords, radius) => {
    const modLon = coords.lon + overlayLonOffset;
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

export const lineBetweenTwoPoints = (location, nextLocation, radius) => {
    //Move this to a separate component
    const location3dCoords = to3dLocation(location.coordinates, radius, overlayLonOffset);
    const firstVertex = [0,0,0];
    const midPointVertices = [];
    //0,0,0 so it is relative to the already absolute positioned container it is inside of.
    for(let i = 1; i <= 4; i++){
        const pointLocation = i * .2;
        const midPointCoords = midpoint(location.coordinates, nextLocation.coordinates, pointLocation);
        midPointVertices.push(getRelativeLineVertex(location3dCoords, midPointCoords, radius));
    }
    const lastvertex = getRelativeLineVertex(location3dCoords, nextLocation, radius);
    return [firstVertex, ...midPointVertices, lastvertex];
}