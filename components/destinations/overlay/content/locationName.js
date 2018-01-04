import React from "react";
import {
    View,
    Text,
    Sphere
} from 'react-vr';
import styles from "../style";
import { overlayLonOffset } from "../../../../consts/rotationOffset";
import GazeAwareButton from "../../../../components/buttons/gazeawarebutton";

export default class LocationName extends React.Component{
    getYRotationForLocation(location){
        return location.coordinates.lon + overlayLonOffset;
    }
    render(){
        const { location, isSelected, selectCallback } = this.props;
        const backgroundColor = isSelected ? "green" : "rgba(2, 2, 2, 0.5)"; 
        const buttonStyle = {  
            height:.03,
            width:.1,
            backgroundColor: backgroundColor
        };
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
                <GazeAwareButton
                    key={`nav-${location.name}`}
                    text={location.location}
                    textStyle={styles.locationName}
                    buttonStyle={buttonStyle}
                    selectHandler={selectCallback}
                />
            </View>
        )
    }
}  
