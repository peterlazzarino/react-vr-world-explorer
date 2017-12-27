import React from "react";
import {
    asset
} from 'react-vr';
import SpaceSphere from "../solar-system/spaceSphere";
import { connect } from "react-redux";
import DestinationOverlay from "../destinations/overlay";
import EarthSpin from "../solar-system/earthSpin";

class Earth extends React.Component{
    render(){
        return (
            <EarthSpin xOffset={270} yOffset={0}>
                <SpaceSphere wrap={asset("earth_alt.jpg")} radius={this.props.scale} lit={true}/>
                <DestinationOverlay sphereRadius={this.props.scale} />
            </EarthSpin>
        )
    }
}

export default Earth;