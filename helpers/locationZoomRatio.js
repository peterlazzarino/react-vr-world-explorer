const zoomRatio = 1.5;
const zoomOffset = 2;
const maxZoom = 1.9;

export const calculateZoom = (distance) => {
    const zoomLevel = distance * zoomRatio + zoomOffset;
    const actualZoom = zoomLevel < maxZoom ? maxZoom : zoomLevel;
    return -(actualZoom);
}