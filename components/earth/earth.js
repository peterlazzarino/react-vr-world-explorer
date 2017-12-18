import React from "react";
import {
    asset,
    Animated,
    Sphere,
    View,
} from 'react-vr';

export default class Earth extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }
    componentDidMount() {
        this.state.bounceValue.setValue(0);    
        Animated.timing(this.state.bounceValue, {
            toValue: 360,     
            duration: 5000                 
        }).start();                                
    }
    render(){
        const earthSize = this.props.scale;
        return (
            <Animated.View style={{    
                opacity: 1,
                transform: [
                    {translateY: this.state.bounceValue, translate: [0, 0, -3]},
                ],
            }}>
                <Sphere
                    lit={false}
                    wireframe={false}
                    style={{
                        height: earthSize / 2,
                        width: earthSize / 2,
                        transform: [{translate: [0, 0, -3]}],
                    }}
                    texture={asset("earth.jpg")}
                    radius={earthSize}
                    widthSegments={40}
                    heightSegments={40}
                />
            </Animated.View>
        )
    }
}