import React from "react";
import {
    View,
    Text,
    Sphere
} from 'react-vr';
import styles from "../style";
import { overlayLonOffset } from "../../../../consts/rotationOffset";

export default class LocationName extends React.Component{
    getYRotationForLocation(location){
        console.log(location);
        return location.coordinates.lon + overlayLonOffset;
    }
    render(){
        const { location } = this.props;
        return (
            <View style={[
                styles.textContainer,
                {transform: [{
                    rotateY: this.getYRotationForLocation(location),
                }, {
                    rotateX: -55
                }, {
                    translateX: -.07
                }, {
                    translateY: .05
                }, {
                    translateZ: .05
                }]}                           
            ]}>
                <Text style={[styles.locationName]}>
                    {location.location}
                </Text>
            </View>
        )
    }
}