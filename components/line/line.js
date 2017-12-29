import React from "react";
import createReactClass from "create-react-class";
import NativeMethodsMixin from 'NativeMethodsMixin';
import PropTypes from 'prop-types';
import StyleSheetPropType from 'StyleSheetPropType';
import LayoutAndTransformPropTypes from 'LayoutAndTransformPropTypes';
import ReactNativeViewAttributes from 'ReactNativeViewAttributes';
import { requireNativeComponent } from 'react-native'; 
import {
    View
} from 'react-vr';

const VRLineComponent = createReactClass({
    /* 
        Using createClass syntax for mixin support. 
        This is the recommended way to create native modules in react-vr currently
    */
    mixins: [NativeMethodsMixin],
    propTypes: {
      ...View.propTypes,
      style: StyleSheetPropType(LayoutAndTransformPropTypes),
      vertices: PropTypes.array,
      color: PropTypes.string
    },
    viewConfig: {
        uiViewClassName: "Line",
        validAttributes: {
            ...ReactNativeViewAttributes.RCTView,
            vertices: true,
            color: true
        }
    },
    getDefaultProps: function() {
        return {};
    },
    render: function() {
      return (
        <VRLine
          {...this.props}>
        </VRLine>
      );
    },
});


const VRLine = requireNativeComponent('VRLine', VRLineComponent, {
    nativeOnly: {},
});

export default VRLineComponent;