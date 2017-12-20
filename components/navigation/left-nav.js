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

class LeftNavigation extends React.Component{
    constructor(props) {
        super(props);
        this.spinEarth = this.spinEarth.bind(this);
    }
    spinEarth(){
        this.props.fullSpin();
    }
    render(){
        const buttonStyle = { paddingHorizontal:.05, width: 1, marginBottom:.05, backgroundColor: "white" };
        return (
            <View>
                <View style={{    
                    position:"absolute",
                    backgroundColor: "green",
                    padding: .55,
                    width:1,
                    paddingBottom: .6,
                    opacity:.5,
                    transform: [
                        { translate: [-2, 1, -3.01]  },
                    ],
                }}>
                </View>
                <View style={{    
                    position:"absolute",
                    padding: .05,
                    transform: [
                        { translate: [-2, 1, -3]  },
                    ],
                }}>
                    <Text style={{ marginBottom:.05 }}>Explore a country!</Text>
                    <VrButton onClick={this.spinEarth} style={buttonStyle} > 
                        <Text style={{color: "green" }}>Italy</Text>
                    </VrButton>
                    <VrButton onClick={this.spinEarth} style={buttonStyle} > 
                        <Text style={{color: "green" }}>Greece</Text>
                    </VrButton>
                    <VrButton onClick={this.spinEarth} style={buttonStyle} > 
                        <Text style={{color: "green" }}>Iceland</Text>
                    </VrButton>
                    <VrButton onClick={this.spinEarth} style={buttonStyle} > 
                        <Text style={{color: "green" }}>United States</Text>
                    </VrButton>
                </View>
            </View>
        )
    }
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(LeftNavigation);

export default NavigationContainer;