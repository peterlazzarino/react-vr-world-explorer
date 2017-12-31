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
        this.calculateOverlayVertices = this.calculateOverlayVertices.bind(this);
    }
    calculateOverlayVertices(location, location3dCoords, nextLocation){
        //Move this to a separate component
        const firstVertex = [0,0,0];
        const midPointVertices = [];
        //0,0,0 so it is relative to the already absolute positioned container it is inside of.
        for(let i = 1; i <= 4; i++){
            const pointLocation = i * .2;
            const midPointCoords = midpoint(location.coordinates, nextLocation.coordinates, pointLocation);
            midPointVertices.push(getRelativeLineVertex(location3dCoords, midPointCoords, this.props.sphereRadius));
        }
        const lastvertex = getRelativeLineVertex(location3dCoords, nextLocation, this.props.sphereRadius);
        return [firstVertex, ...midPointVertices, lastvertex];
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
                    const nextLocation = firstTour.locations[idx + 1];
                    let lineSegments = [];
                    if(nextLocation){
                        lineSegments = this.calculateOverlayVertices(location, location3dCoords, nextLocation);
                    }
                    return (
                        <View key={`${location.location}-${idx}`} style={{
                            position:"absolute" ,
                            transform: [
                                { translate: location3dCoords },
                            ]
                        }}> 
                            <Sphere radius={.01} heightSegments={15} widthSegments={15} style={{
                                color:"green"                                
                            }} />
                            <View style={{
                                backgroundColor: '#2b2b2b',
                                position:"absolute",
                                paddingBottom:.005,
                                paddingRight:.02,
                                paddingLeft:.02,
                                transform: [{
                                    rotateY: this.getYRotationForLocation(location),
                                }, {
                                    rotateX: -50
                                }, {
                                    translateX: -.09
                                }, {
                                    translateY: .05
                                }, {
                                    translateZ: .1
                                }]
                            }}>
                                <Text style={{
                                    textAlign: "center", 
                                    fontWeight: "400",
                                    color:"white",
                                    fontSize: .05,
                                }}>
                                    {location.location}
                                </Text>
                                {location.nights && 
                                    <Text style={{
                                        fontSize: .02
                                    }}>
                                        {location.nights} nights 
                                    </Text>
                                }
                            </View>
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