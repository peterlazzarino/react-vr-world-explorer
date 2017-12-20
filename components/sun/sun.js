import SpaceSphere from "../solar-system/spaceSphere";
import React from "react";
import {
    asset,
    Sphere,
    Animated,
    View,
} from 'react-vr';

class Sun extends React.Component{
    render(){
        return (
            <Animated.View style={{
                position:"absolute",
                transform: [
                    { translate: [10, 20, 10]  }
                ],
            }}>
                <SpaceSphere wrap={asset("sun.jpg")} radius={4} />
            </Animated.View>
        )
    }
}

export default Sun;