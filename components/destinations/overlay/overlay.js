import React from "react";
import {
    View,
    Text,
    Sphere
} from 'react-vr';
import { to3dLocation, getRelativeLineVertex, lineBetweenTwoPoints } from "../../../helpers/coordinateHelpers";
import { connect } from "react-redux";
import VRLine from "../../line/line";
import LocationOverlay from "./content/locationOverlay";
import styles from "./style";

const mapStateToProps = (state, ownProps) => {
    return state.navReducer;
}

class Overlay extends React.Component{
    constructor(){
        super();
    }
    render(){   
        const { selectedTour, sphereRadius } = this.props;     
        if(!selectedTour){
            return null;
        }
        return (
            <View>
                {selectedTour.locations.map((location, idx) => {
                    let lineSegments = [];
                    const nextLocation = selectedTour.locations[idx + 1];
                    const location3dCoords = to3dLocation(location.coordinates, sphereRadius);
                    if(nextLocation){
                        lineSegments = lineBetweenTwoPoints(location, nextLocation, sphereRadius);
                    }
                    return (
                        <View key={`${location.location}-${idx}`} style={{
                            position:"absolute" ,
                            transform: [
                                { translate: location3dCoords },
                            ]
                        }}> 
                            <Sphere radius={.004} heightSegments={15} widthSegments={15} style={[styles.sphere]} />
                            <LocationOverlay location={location} />
                            {nextLocation && 
                                <VRLine color="rgb(255, 255, 255)" vertices={lineSegments} />
                            }
                        </View>
                    )
                })}
            </View> 
        )
    }
} 

const OverlayContainer = connect(mapStateToProps)(Overlay);

export default OverlayContainer;