import React from "react";
import {
    View,
    Text,
    Sphere
} from 'react-vr';
import { to3dLocation, midpoint, getRelativeLineVertex } from "../../helpers/coordinateHelpers";
import { connect } from "react-redux";
import VRLine from "../line/line";

const mapStateToProps = (state, ownProps) => {
    return state.navReducer;
}

class Overlay extends React.Component{
    constructor(){
        super();
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
                    const location3dCoords = to3dLocation(location.coordinates, this.props.sphereRadius, 90);
                    let nextLocationTranslation = [];
                    let midpointTranslation = [];
                    const nextLocation = firstTour.locations[idx + 1];
                    if(nextLocation){
                        nextLocationTranslation = getRelativeLineVertex(location3dCoords, nextLocation, this.props.sphereRadius);
                        midpointTranslation = getRelativeLineVertex(location3dCoords, midpoint(location.coordinates, nextLocation.coordinates, .5), this.props.sphereRadius + .01);
                    }
                    return (
                        <View key={`${location.location}-${idx}`} style={{
                            position:"absolute" ,
                            transform: [
                                { translate: location3dCoords },
                            ]
                        }}> 
                            <Sphere radius={.008} heightSegments={15} widthSegments={15} style={{
                                color:"green"                                
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
                            {nextLocation && 
                                <VRLine color="rgb(255, 255, 255)" vertices={[[0,0,0], midpointTranslation, nextLocationTranslation]} />
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