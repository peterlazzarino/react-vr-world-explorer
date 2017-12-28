import React from "react";
import {
    View,
    Text,
    Sphere
} from 'react-vr';
import { connect } from "react-redux";

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
                    return (
                        <View key={`${location.location}-${idx}`} style={{
                            position:"absolute" ,
                            transform: [
                                {  translate: this.to3dLocation(location.coordinates) }
                            ]
                        }}> 
                            <Sphere radius={.008} heightSegments={15} widthSegments={15} style={{
                                color:"yellow"                                
                            }} />
                            <Text style={{
                                textAlign: "center", backgroundColor: '#777879',
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
                                }}>{location.location}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }
} 

const OverlayContainer = connect(mapStateToProps)(Overlay);

export default OverlayContainer;