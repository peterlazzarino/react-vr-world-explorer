import React from "react";
import {
    View,
    Text,
    Sphere
} from 'react-vr';
import { connect } from "react-redux";
import EarthSpin from "../solar-system/earthSpin";

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
    render(){   
        const { tours } = this.props;     
        if(!tours || tours.length < 1){
            return null;
        }
        const firstTour = tours[0];
        return (
            <EarthSpin>
                {firstTour.locations.map((location, idx) => {
                    return (
                        <View key={`${location.name}-${idx}`} style={{
                            position:"absolute"
                        }}>
                            <Sphere radius={.004} style={{
                                color:"red",
                                transform: [
                                    {  translate:  this.to3dLocation(location.coordinates) }
                                ]
                            }} />
                        </View>
                    )
                })}
            </EarthSpin>
        )
    }
} 

const OverlayContainer = connect(mapStateToProps)(Overlay);

export default OverlayContainer;