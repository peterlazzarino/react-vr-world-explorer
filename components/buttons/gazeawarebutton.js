import React from "react";
import {
    Text,
    View,
    VrButton,
    Animated
} from 'react-vr';

export default class GazeAwareButton extends React.Component{
    constructor(props){
        super(props);
        this.onEnter = this.onEnter.bind(this);
        this.onExit = this.onExit.bind(this);
        this.finalizeSelection = this.finalizeSelection.bind(this);
        this.interval;
        this.animation;
        this.maxViewWidth = props.buttonStyle.width || 1;
        this.state = {
            gazeProgressMeter : new Animated.Value(0),
        }
    }
    finalizeSelection(){
        const { selectHandler } = this.props;
        selectHandler();
    }
    onEnter(){
        const { selectTimeout } = this.props;
        //use default props
        const timeout = selectTimeout || 500;
        this.interval = setTimeout(this.finalizeSelection, timeout);        
        this.animation = Animated.timing(this.state.gazeProgressMeter, {
            toValue: this.maxViewWidth,     
            duration: timeout
        });
        this.animation.start((anim) => {
            const animLength = anim.finished ? 100 : 0;
            Animated.timing(this.state.gazeProgressMeter, {
                toValue: 0,     
                duration: animLength
            }).start();            
        });
    }
    onExit(){
        clearTimeout(this.interval);
        this.animation.stop(); 
    }
    render(){
        const { buttonStyle, textStyle, text, selectHandler, progressColor, selectTimeout, isSelected } = this.props;
        const buttonWidth = buttonStyle.width || 1;
        const buttonHeight = buttonStyle.height || .2;
        const finalButtonStyle = Object.assign({}, buttonStyle, { width: buttonWidth, height: buttonHeight });
        return (
            <View>
                <VrButton 
                    style={finalButtonStyle} 
                    onEnter={this.onEnter} 
                    onExit={this.onExit} 
                    onClick={this.finalizeSelection}
                >
                    <Animated.View style={{ 
                        width: this.state.gazeProgressMeter, 
                        position:"absolute", 
                        height: buttonHeight, 
                        opacity: .7,
                        backgroundColor: progressColor || "#46A032" 
                    }} />
                    <Text 
                        style={textStyle}
                    >
                        {text}
                    </Text>
                </VrButton>
            </View>
        )
    }
}