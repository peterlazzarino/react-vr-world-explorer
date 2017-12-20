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
                transform: [
                    { translate: [10, 10, 10]  }
                ],
            }}>
                <Orbiter src={"moon.jpg"} size={2} />
            </Animated.View>
        )
    }
}

export default Moon;