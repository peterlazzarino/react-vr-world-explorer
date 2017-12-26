import React from "react";
import {
    asset
} from 'react-vr';
import SpaceSphere from "../solar-system/spaceSphere";
import { connect } from "react-redux";
import EarthSpin from "../solar-system/earthSpin";

class Earth extends React.Component{
    render(){
        return (
            <EarthSpin>
                <SpaceSphere wrap={asset("earth.jpg")} radius={this.props.scale} lit={true}/>
            </EarthSpin>
        )
    }
}

export default Earth;