import React from "react";
import {
  Pano,
  Animated,
  View
} from 'react-vr';
import Earth from "../earth/earth";
import BottomNav from "../navigation/bottom-nav";
import Moon from "../moon/moon";
import { connect } from "react-redux";
import LocationPanel from "../destinations/overlay/content/locationPanel";

const mapStateToProps = (state, ownProps) => {
    return state.navReducer;
}

class EarthContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            translateZVal: new Animated.Value(-4)
        }
        this.zoom = this.zoom.bind(this);
        this.changeZoomLevel = this.changeZoomLevel.bind(this);
    }
    componentWillReceiveProps(next){
        if(!this.props.selectedLocation && next.selectedLocation){
            this.zoom(next.zoomLevel);
        }
        if(!next.selectedLocation){
            this.zoom(-4);
        }         
    }
    changeZoomLevel(to){
        Animated.spring(this.state.translateZVal, {
            toValue: to,
            friction: 4,
            tension: 4
        }).start();
    }
    zoom(level){
        this.changeZoomLevel(level);
    }
    render(){
        return(
            <Animated.View style={{
                transform: [
                  { translateX: 0 },
                  { translateY: 0 },
                  { translateZ: this.state.translateZVal}
                ]
            }}>
                <BottomNav />       
                <LocationPanel />
                <Earth scale={this.props.earthRadius} />
                <Moon />
            </Animated.View>
        );
    }
}

const EarthContainerView = connect(mapStateToProps)(EarthContainer);

export default EarthContainerView;