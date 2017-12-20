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
        this.showProgress = this.showProgress.bind(this);
        this.hideProgress = this.hideProgress.bind(this);
        this.interval;
        this.defaultHeight = .2;
        this.defaultWidth = 1;
        this.maxViewWidth = props.buttonStyle.width || this.defaultWidth;
        this.state = {
            gazeProgressMeter : new Animated.Value(0),
        }
        this.animation = Animated.timing(this.state.gazeProgressMeter, {
            toValue: this.maxViewWidth,     
            duration: props.selectTimeout
        });
    }
    showProgress(){
        this.animation.start((anim) => {
            const animLength = anim.finished ? 100 : 0;
            this.hideProgress(animLength);
        });
    }
    hideProgress(duration){
        Animated.timing(this.state.gazeProgressMeter, {
            toValue: 0,     
            duration: duration
        }).start();
    }
    onEnter(){
        const { selectTimeout } = this.props;
        const timeout = selectTimeout;
        this.interval = setTimeout(this.selectHandler, timeout); 
        this.showProgress();
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
            <View>
                <VrButton 
                    style={finalButtonStyle} 
                    onEnter={this.onEnter} 
                    onExit={this.onExit} 
                    onClick={this.selectHandler}
                >
                    <Animated.View style={{ 
                        width: this.state.gazeProgressMeter, 
                        position:"absolute", 
                        height: buttonHeight, 
                        opacity: .7,
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