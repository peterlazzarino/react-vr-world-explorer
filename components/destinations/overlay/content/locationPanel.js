import React from "react";
import {
    View,
    Text,
    Sphere
} from 'react-vr';
import styles from "../style";
import { overlayLonOffset } from "../../../../consts/rotationOffset";
import GazeAwareButton from "../../../../components/buttons/gazeawarebutton";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        location: state.overlayReducer.selectedTourLocation
    };
}

class LocationPanel extends React.Component{
    render(){
        const { location } = this.props;
        if(!location){
            return null;
        }
        console.log(location);
        return ( 
            <View style={[
                styles.panel                      
            ]}>
                <View>
                    <Text style={[styles.panelHeading]}>{location.location}</Text>                
                </View>
                <View>
                    <Text style={[styles.panelBody]}>Included meals</Text>  
                    <Text style={[styles.indented,styles.panelBody]}>{location.meals.dinner} dinners</Text>  
                    <Text style={[styles.indented,styles.panelBody]}>{location.meals.lunch} lunches</Text>      
                    <Text style={[styles.indented,styles.panelBody]}>{location.meals.breakfast} breakfasts</Text>              
                </View>
            </View>
        )
    }
}  

const LocationOverLayContainer = connect(mapStateToProps)(LocationPanel);

export default LocationOverLayContainer;
