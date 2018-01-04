import React from "react";
import {
    asset
} from 'react-vr';
import SpaceSphere from "../solar-system/spaceSphere";
import { connect } from "react-redux";
import DestinationOverlay from "../destinations/overlay/overlay";
import EarthSpin from "../solar-system/earthSpin";
import { earthSpinOffset } from "../../consts/rotationOffset"

class Earth extends React.Component{
    render(){
        return (
            <EarthSpin xOffset={earthSpinOffset} yOffset={0}>
                <SpaceSphere wrap={asset("earth_alt.jpg")} radius={this.props.scale} lit={true}/>
                <DestinationOverlay sphereRadius={this.props.scale} />
            </EarthSpin>
        )
    }
}

export default Earth;