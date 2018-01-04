import React from "react";
import {
    View,
    Text,
    Sphere
} from 'react-vr';
import LocationName from "./locationName";
import { selectLocation } from "../../../../redux/modules/overlay";
import styles from "../style";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    const isSelected = state.overlayReducer.selectedTourLocation == ownProps.location.location;
    return {
        isSelected: isSelected
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ selectLocation }, dispatch);
}

class LocationOverLay extends React.Component{
    constructor(){
        super();
        this.selectLocation = this.selectLocation.bind(this);
    }
    selectLocation(){
        this.props.selectLocation(this.props.location.location);
    }
    render(){
        const { location, isSelected } = this.props;
        return (            
            <View>
                <LocationName selectCallback={this.selectLocation} location={location} isSelected={isSelected} />
            </View>            
        )
    }
}

const LocationOverLayContainer = connect(mapStateToProps, mapDispatchToProps)(LocationOverLay);

export default LocationOverLayContainer;