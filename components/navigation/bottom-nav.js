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
import { removeLocation } from "../../redux/modules/nav";
import GazeAwareButton from "../../components/buttons/gazeawarebutton";

const mapStateToProps = (state, ownProps) => {
    return state.navReducer;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ removeLocation }, dispatch);
}

class BottomNav extends React.Component{
    constructor(props) {
        super(props);
        this.changeTransparency = this.changeTransparency.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.state = {
            opacityValue: new Animated.Value(0)
        };
    }
    componentWillReceiveProps(next){
        if(!this.props.selectedLocation && next.selectedLocation){
            this.show();
        }
        if(!next.selectedLocation){
            this.hide();
        }         
    }
    changeTransparency(to){
        Animated.spring(this.state.opacityValue, {
            toValue: to,
            friction: 4,
            tension: 4
        }).start();
    }
    hide(){
        this.changeTransparency(0);
    }
    show(){
        this.changeTransparency(1);
    }
    render(){
        const buttonStyle = { paddingHorizontal:.05, width: 1, height: .15, marginBottom:.05, backgroundColor: "white" };
        return (
            <Animated.View style={{
                opacity: this.state.opacityValue    
            }}>
                <View style={{    
                    position:"absolute",
                    backgroundColor: "green",
                    padding: .13,
                    width:1.1,
                    opacity:.5,
                    transform: [
                        { translate: [-.55, -.5, -.5]  },
                    ],
                }}>
                </View>
                <View style={{    
                    position:"absolute",
                    padding: .05,
                    transform: [
                        { translate: [-.55, -.5, -.5]  },
                    ], 
                }}>       
                    <GazeAwareButton 
                        key={`nav-${location.name}`}
                        text={"<-- Go Back"}
                        textStyle={{color: "black", textAlign: "center"}} 
                        buttonStyle={buttonStyle}
                        selectHandler={() => {
                            this.props.removeLocation();
                        }}
                    />      
                </View>
            </Animated.View>
        )
    }
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(BottomNav);

export default NavigationContainer;