import React from "react";
import {
    View,
    Text
} from 'react-vr';

export default class Overlay extends React.Component{
    constructor(){
        super();
        this.to3dLocation = this.to3dLocation.bind(this);
    }
    to3dLocation(lat, lon){
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
        const destinationTransform = this.to3dLocation(1.2921, 36.8219);
        console.log(destinationTransform);
        return (
            <View style={{
                position:"absolute",
            }}>
                <Text style={{
                    transform: [{ 
                        translate: destinationTransform  }
                    ]
                }}>Nairobe</Text>
            </View>
        )
    }
} 