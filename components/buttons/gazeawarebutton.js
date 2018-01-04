import React from "react";
import {
    Text,
    View,
    VrButton,
    Animated
} from 'react-vr';

export default class GazeAwareButton extends React.Component{

	static defaultProps = {
        selectTimeout: 500,
        progressColor: "#46A032" 
    };
    
    constructor(props){
        super(props);
        this.onEnter = this.onEnter.bind(this);
        this.onExit = this.onExit.bind(this);
        this.finalizeSelection = this.finalizeSelection.bind(this);
        this.interval;
        this.animation;
        this.defaultHeight = .2;
        this.defaultWidth = 1;
        this.maxViewWidth = props.buttonStyle.width || this.defaultWidth;
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
        const timeout = selectTimeout;
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
        const buttonWidth = buttonStyle.width || this.defaultWidth;
        const buttonHeight = buttonStyle.height || this.defaultHeight;
        const finalButtonStyle = Object.assign({}, buttonStyle, { width: buttonWidth, height: buttonHeight });
        return (
            <View onEnter={this.onEnter} onExit={this.onExit} >
                <VrButton 
                    style={finalButtonStyle} 
                    onClick={this.finalizeSelection}
                >
                    <Animated.View style={{ 
                        width: this.state.gazeProgressMeter, 
                        position:"absolute", 
                        height: buttonHeight, 
                        backgroundColor: progressColor
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