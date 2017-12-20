import React from "react";
import {
    Text,
    VrButton
} from 'react-vr';

export default class GazeAwareButton extends React.Component{
    constructor(props){
        super(props);
        this.onEnter = this.onEnter.bind(this);
        this.onExit = this.onExit.bind(this);
    }
    onEnter(){

    }
    onExit(){

    }
    render(){
        const { buttonStyle, textStyle, text, selectHandler } = this.props;
        return (
            <VrButton style={buttonStyle} onEnter={this.onEnter} onExit={this.onExit} onClick={selectHandler}>
                <Text style={textStyle}>{text}</Text>
            </VrButton>
        )
    }
}