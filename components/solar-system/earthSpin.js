import React from "react";
import {
    Animated,
    Sphere,
    View,
} from 'react-vr';
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return state.navReducer;
}

class EarthSpin extends React.Component{
    constructor(props) {
        super(props);
        this.spin = this.spin.bind(this);
        this.primeMeridianOffset = this.props.xOffset || 0;
        this.equatorOffset = this.props.yOffset || 0;
        this.state = {
            bounceXValue: new Animated.Value(this.primeMeridianOffset),
            bounceYValue: new Animated.Value(this.equatorOffset),
        };
    }
    mapLatitude(lat){
        return lat + this.equatorOffset;
    }
    mapLongitude(lon){
        return lon + this.primeMeridianOffset;
    }
    componentWillReceiveProps(next){
        if(this.props.selectedLocation != next.selectedLocation && next.selectedLocation){
            this.spin(this.mapLatitude(next.selectedLocation.coordinates.lat), this.mapLongitude(next.selectedLocation.coordinates.lon));
        }
    }
    spin(lat, lon){
        Animated.spring(this.state.bounceXValue, {
            toValue: lon,
            friction: 15,
            tension: 4
        }).start();
        Animated.spring(this.state.bounceYValue, {
            toValue: lat,
            friction: 15,
            tension: 4
        }).start();
    }    
    render(){
        return (
            <Animated.View style={{
                transform: [
                    { rotateX: this.state.bounceYValue},
                    { rotateY: this.state.bounceXValue},
                ],
            }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

const EarthSpinContainer = connect(mapStateToProps)(EarthSpin);

export default EarthSpinContainer;