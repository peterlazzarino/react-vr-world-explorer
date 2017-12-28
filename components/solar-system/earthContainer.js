import React from "react";
import {
  Pano,
  Animated,
  View
} from 'react-vr';
import Earth from "../earth/earth";
import Moon from "../moon/moon";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return state.navReducer;
}

class EarthContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            translateZVal: new Animated.Value(-4)
        }
        this.zoomIn = this.zoomIn.bind(this);
        this.zoomOut = this.zoomOut.bind(this);
        this.changeZoomLevel = this.changeZoomLevel.bind(this);
    }
    componentWillReceiveProps(next){
        if(!this.props.selectedLocation && next.selectedLocation){
            this.zoomIn();
        }
        if(!next.selectedLocation){
            this.zoomOut();
        }         
    }
    changeZoomLevel(to){
        Animated.spring(this.state.translateZVal, {
            toValue: to,
            friction: 4,
            tension: 4
        }).start();
    }
    zoomOut(){
        this.changeZoomLevel(-4);
    }
    zoomIn(){
        this.changeZoomLevel(-3);
    }
    render(){
        return(
            <Animated.View style={{
                transform: [
                  { translateX: 0  },
                  { translateY: -.2 },
                  { translateZ: this.state.translateZVal}
                ]
            }}>
              <Earth scale={this.props.earthRadius} />
              <Moon />
            </Animated.View>
        );
    }
}

const EarthContainerView = connect(mapStateToProps)(EarthContainer);

export default EarthContainerView;