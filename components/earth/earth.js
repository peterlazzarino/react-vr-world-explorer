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
import { startFullSpin, finishSpin } from "../../redux/modules/earth";

const mapStateToProps = (state, ownProps) => {
    console.log(state.earthReducer);
    return state.earthReducer;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ startFullSpin, finishSpin }, dispatch);
}


class Earth extends React.Component{
    constructor(props) {
        super(props);
        this.spin = this.spin.bind(this);
        this.fullSpin = this.fullSpin.bind(this);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }
    componentWillReceiveProps(next){
        if(!this.props.fullSpinRequested && next.fullSpinRequested){
            this.props.startFullSpin();
            this.state.bounceValue.setValue(0);
            this.fullSpin();
        }
    }
    fullSpin(){
        this.spin(360);
    }
    spin(to){
        this.state.bounceValue.setValue(0);
        Animated.spring(this.state.bounceValue, {
            toValue: to,
            friction: 15,
            tension: 4
        }).start();
    }
    componentDidMount() {
        this.spin(360)
    }
    render(){
        const earthSize = this.props.scale;
        return (
            <Animated.View style={{
                transform: [
                    { rotateY: this.state.bounceValue}
                ],
            }}>
                <SpaceSphere wrap={asset("earth.jpg")} radius={earthSize} lit={true}/>
            </Animated.View>
        )
    }
}

const EarthContainer = connect(mapStateToProps, mapDispatchToProps)(Earth);

export default EarthContainer;