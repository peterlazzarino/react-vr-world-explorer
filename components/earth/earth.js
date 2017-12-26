import React from "react";
import {
    asset,
    Animated,
    Sphere,
    View,
} from 'react-vr';
import SpaceSphere from "../solar-system/spaceSphere";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { spinTo, startFullSpin } from "../../redux/modules/earth";

const mapStateToProps = (state, ownProps) => {
    return state.earthReducer;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ spinTo, startFullSpin }, dispatch);
}

class Earth extends React.Component{
    constructor(props) {
        super(props);
        this.spin = this.spin.bind(this);
        this.primeMeridianOffset = 270;
        this.equatorOffset = 0;
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
        if(!this.props.fullSpinRequested && next.fullSpinRequested){
            this.props.startFullSpin();
            this.spin(this.mapLatitude(next.spinLocation.lat), this.mapLongitude(next.spinLocation.lon));
        }
    }
    spin(lat, lon){
        console.log(lat + " " + lon)
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
                    { rotateY: this.state.bounceXValue}
                ],
            }}>
                <SpaceSphere wrap={asset("earth.jpg")} radius={this.props.scale} lit={true}/>
            </Animated.View>
        )
    }
}

const EarthContainer = connect(mapStateToProps, mapDispatchToProps)(Earth);

export default EarthContainer;