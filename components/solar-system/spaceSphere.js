import React from "react";
import {
    Sphere
} from 'react-vr';

class SpaceSphere extends React.Component{
    render(){
        return (
            <Sphere
                texture={this.props.wrap}
                radius={this.props.radius}
                widthSegments={40}
                heightSegments={40}
            />
        )
    }
}

export default SpaceSphere;