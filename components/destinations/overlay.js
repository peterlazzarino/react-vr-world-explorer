import React from "react";
import {
    View,
    Text,
    Sphere
} from 'react-vr';
import * as THREE from 'three';
import { connect } from "react-redux";
import VRLine from "../line/line";

const mapStateToProps = (state, ownProps) => {
    return state.navReducer;
}

class Overlay extends React.Component{
    constructor(){
        super();
        this.to3dLocation = this.to3dLocation.bind(this);
    }
    // clean this up, move somewhere else
    to3dLocation(coords){
        const modLonRotation = 90;
        const modLon = coords.lon + modLonRotation;
        const rad = this.props.sphereRadius;
        var cosLat = Math.cos(coords.lat * Math.PI / 180.0);
        var sinLat = Math.sin(coords.lat * Math.PI / 180.0);
        var cosLon = Math.cos(modLon * Math.PI / 180.0);
        var sinLon = Math.sin(modLon * Math.PI / 180.0);
        return [
            rad * cosLat * sinLon, 
            rad * sinLat,
            rad * cosLat * cosLon
        ];
    }
    getYRotationForLocation(location){
        return location.coordinates.lon + 90;
    }
    render(){   
        const { tours } = this.props;     
        if(!tours || tours.length < 1){
            return null;
        }
        const firstTour = tours[0];
        return (
            <View>
                {firstTour.locations.map((location, idx) => {
                    const location3dCoords = this.to3dLocation(location.coordinates);
                    const nextLocation = firstTour.locations[idx + 1];
                    let nextLocationTranslation = [];
                    if(nextLocation){
                        let nextLocation3dCoords = this.to3dLocation(nextLocation.coordinates);
                        nextLocationTranslation = [
                            nextLocation3dCoords[0] - location3dCoords[0],
                            nextLocation3dCoords[1] - location3dCoords[1], 
                            nextLocation3dCoords[2] - location3dCoords[2]
                        ]
                    }
                    return (
                        <View key={`${location.location}-${idx}`} style={{
                            position:"absolute" ,
                            transform: [
                                {  translate: location3dCoords }
                            ]
                        }}> 
                            <Sphere radius={.008} heightSegments={15} widthSegments={15} style={{
                                color:"yellow"                                
                            }} />
                            <Text style={{
                                textAlign: "center", 
                                backgroundColor: '#777879',
                                fontWeight: "400",
                                color:"white",
                                position:"absolute",
                                fontSize: .05,
                                transform: [{
                                    rotateY: this.getYRotationForLocation(location),
                                }, {
                                    rotateX: -50
                                }, {
                                    translateX: -.05
                                }, {
                                    translateY: .05
                                }, {
                                    translateZ: .2
                                }]
                            }}>
                                {location.location}
                            </Text>
                            {nextLocation && <VRLine style={{ position:"absolute" }} vertices={[[0,0,0], nextLocationTranslation]} />}
                        </View>
                    )
                })}
            </View>
        )
    }
} 

const OverlayContainer = connect(mapStateToProps)(Overlay);

export default OverlayContainer;