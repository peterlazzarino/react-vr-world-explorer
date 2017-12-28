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
import { selectLocation } from "../../redux/modules/nav";
import GazeAwareButton from "../../components/buttons/gazeawarebutton";

const mapStateToProps = (state, ownProps) => {
    return state.navReducer;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ selectLocation }, dispatch);
}

class LeftNavigation extends React.Component{
    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
    }
    navigate(location){
        this.props.selectLocation(location);
    }
    render(){
        const buttonStyle = { paddingHorizontal:.05, width: 1, height: .15, marginBottom:.05, backgroundColor: "white" };
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
                        { translate: [-2.5, .6, -3.01]  },
                    ],
                }}>
                </View>
                <View style={{    
                    position:"absolute",
                    padding: .05,
                    transform: [
                        { translate: [-2.5, .6, -3]  },
                    ], 
                }}>
                    <Text style={{ marginBottom:.05 }}>Explore a country!</Text>                    
                    {this.props.locations.map((location) => {
                            return (
                                <GazeAwareButton 
                                    key={`nav-${location.name}`}
                                    text={location.name}
                                    textStyle={{color: "black"}} 
                                    buttonStyle={buttonStyle}
                                    selectHandler={() => {
                                        this.navigate(location);
                                    }}
                                />      
                            )              
                        }
                    )}
                </View>
            </View>
        )
    }
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(LeftNavigation);

export default NavigationContainer;