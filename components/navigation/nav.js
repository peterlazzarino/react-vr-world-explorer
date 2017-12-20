import React from "react";
import {
    asset,
    Animated,
    Text,
    View,
    VrButton,
} from 'react-vr';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fullSpin } from "../../redux/modules/earth";

const mapStateToProps = (state, ownProps) => {
    return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ fullSpin }, dispatch);
}

class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.spinEarth = this.spinEarth.bind(this);
    }
    spinEarth(){
        this.props.fullSpin();
    }
    render(){
        return (
            <View style={{    
                position:"absolute",
                transform: [
                    { translate: [-.43, .8, -2]  },
                    { rotateX : "20deg"}
                ],
            }}>
                <VrButton onClick={this.spinEarth} style={{ paddingHorizontal:.05, backgroundColor: "white" }} > 
                    <Text style={{color: "green" }}>Take me for a spin!</Text>
                </VrButton>
            </View>
        )
    }
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer;