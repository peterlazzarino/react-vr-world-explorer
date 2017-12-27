import React from "react";
import {
    View,
    Text,
    Sphere
} from 'react-vr';
import EarthSpin from "../solar-system/earthSpin";

export default class Overlay extends React.Component{
    constructor(){
        super();
        this.to3dLocation = this.to3dLocation.bind(this);
    }
    to3dLocation(lat, lon){
        lon = lon + 90;
        const rad = this.props.sphereRadius;
        var cosLat = Math.cos(lat * Math.PI / 180.0);
        var sinLat = Math.sin(lat * Math.PI / 180.0);
        var cosLon = Math.cos(lon * Math.PI / 180.0);
        var sinLon = Math.sin(lon * Math.PI / 180.0);
        return [
            rad * cosLat * sinLon, 
            rad * sinLat,
            rad * cosLat * cosLon
        ];
    }
    render(){
        const nairobeCoords = this.to3dLocation(-1.2921, 36.8221);
        const newYorkCoords = this.to3dLocation(40.7128, -74.0060);
        const romeCoords = this.to3dLocation(41.9128, 12.4964);
        return (
            <EarthSpin>
                <View style={{
                    position:"absolute"
                }}>
                    <Sphere radius={.02} style={{
                        color:"red",
                        transform: [
                            {  translate: nairobeCoords  }
                        ]
                    }}/>
                </View>
                <View style={{
                    position:"absolute"
                }}>
                    <Sphere radius={.02} style={{
                        color:"red",
                        transform: [
                            {  translate: newYorkCoords  }
                        ]
                    }} />
                </View>
                <View style={{
                    position:"absolute"
                }}>
                    <Sphere radius={.02} style={{
                        color:"red",
                        transform: [
                            {  translate: romeCoords  }
                        ]
                    }} />
                </View>
            </EarthSpin>
        )
    }
} 