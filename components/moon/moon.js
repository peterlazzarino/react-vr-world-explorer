import React from "react";
import {
    asset,
    Animated,
    Sphere,
    View,
} from 'react-vr';
import Orbiter from "../solar-system/orbiter";

class Moon extends React.Component{
    render(){
        return (
            <Animated.View style={{   
                position:"absolute", 
            }}>
                <Orbiter src={"moon.jpg"} size={2} />
            </Animated.View>
        )
    }
}

export default Moon;