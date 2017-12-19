import React from "react";
import {
    Sphere,
    asset,
    Animated
} from 'react-vr';
import SpaceSphere from "./spaceSphere"

class Orbiter extends React.Component{
    constructor(props) {
        super(props);
        this.spin = this.spin.bind(this);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }
    spin(to){
        this.state.bounceValue.setValue(120);
        Animated.timing(this.state.bounceValue, {
            toValue: to,     
            duration: 200000
        }).start();
    }
    componentDidMount() {    
        this.spin(360)                              
    }
    render(){
        return (            
            <Animated.View style={{    
                position:"absolute",
                transform: [
                    { rotateY: this.state.bounceValue},
                    { translate: [0, 0, 90]  }, 
                ]                
            }}>
                <SpaceSphere 
                    wrap={asset(this.props.src)} 
                    radius={this.props.size} 
                />
            </Animated.View>   
        )
    }
}

export default Orbiter;