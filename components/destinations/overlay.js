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
    to3dLocation(coords){
        coords.lon = coords.lon + 90;
        const rad = this.props.sphereRadius;
        var cosLat = Math.cos(coords.lat * Math.PI / 180.0);
        var sinLat = Math.sin(coords.lat * Math.PI / 180.0);
        var cosLon = Math.cos(coords.lon * Math.PI / 180.0);
        var sinLon = Math.sin(coords.lon * Math.PI / 180.0);
        return [
            rad * cosLat * sinLon, 
            rad * sinLat,
            rad * cosLat * cosLon
        ];
    }
    distanceBetweenTwoCoords(coord, coord2){
        var R = this.props.sphereRadius;// metres
        var φ1 = coord.lat * Math.PI / 180;
        var φ2 = coord2.lat * Math.PI / 180;
        var Δφ = (coord2.lat-coord.lat) * Math.PI / 180;
        var Δλ = (coord2.lon-coord.lon) * Math.PI / 180;
        
        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        
        var d = R * c;
        return d;
    }
    render(){
        
        const romeLatLon = { lat: 41.9128, lon: 12.4964 };
        const parisLatLon = { lat: 48.8566, lon: 2.3522 };
        const londonLatLon = { lat: 51.5074, lon: 0.1278 };
        const romeCoords = this.to3dLocation(romeLatLon);
        const parisCoords = this.to3dLocation(parisLatLon);
        const londonCoords = this.to3dLocation(londonLatLon);

        const londonToParis = this.distanceBetweenTwoCoords(londonLatLon, parisLatLon);
        const parisToRome = this.distanceBetweenTwoCoords(parisLatLon, romeLatLon);
        console.log(londonToParis)
        return (
            <EarthSpin>
                <View style={{
                    position:"absolute"
                }}>
                    <Sphere radius={.004} style={{
                        color:"red",
                        transform: [
                            {  translate: romeCoords  }
                        ]
                    }} />
                </View>
                <View style={{
                    backgroundColor:"yellow",
                    height: .01,
                    width: londonToParis,
                    position:"absolute",
                    transform: [
                        {  translate: londonCoords  }
                    ]
                }}/>
                <View style={{
                    position:"absolute"
                }}>
                    <Sphere radius={.004} style={{
                        color:"red",
                        transform: [
                            {  translate: parisCoords  }
                        ]
                    }} />
                </View>
                <View style={{
                    backgroundColor:"yellow",
                    height: .01,
                    width: parisToRome,
                    position:"absolute",
                    transform: [
                        {  translate: parisCoords  }
                    ]
                }}/>
                <View style={{
                    position:"absolute"
                }}>
                    <Sphere radius={.004} style={{
                        color:"red",
                        transform: [
                            {  translate: londonCoords  }
                        ]
                    }} />
                </View>
            </EarthSpin>
        )
    }
} 