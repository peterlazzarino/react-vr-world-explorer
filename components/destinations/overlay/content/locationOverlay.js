import React from "react";
import {
    View,
    Text,
    Sphere
} from 'react-vr';
import LocationName from "./locationName";
import styles from "../style";

export default class LocationOverLay extends React.Component{
    render(){
        const { location } = this.props;
        return (
            <LocationName location={location} />
        )
    }
}