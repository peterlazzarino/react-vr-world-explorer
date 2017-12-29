import React from "react";
import NativeMethodsMixin from 'NativeMethodsMixin';
import PropTypes from 'prop-types';
import NativeMethodsMixin from 'NativeMethodsMixin';
import StyleSheetPropType from 'StyleSheetPropType';
import LayoutAndTransformPropTypes from 'LayoutAndTransformPropTypes';
import ReactNativeViewAttributes from 'ReactNativeViewAttributes';

const VRLine = requireNativeComponent('VRLine', VRLine, {
    nativeOnly: {},
});

export default class VRLineComponent extends React.createClass({
    /* 
        Using createClass syntax for mixin support. 
        This is the recommended way to create native modules in react-vr currently
    */
    mixins: [NativeMethodsMixin],
    propTypes: {
      ...View.propTypes,
      style: StyleSheetPropType(LayoutAndTransformPropTypes),
      vertices: PropTypes.array,
    },
    viewConfig: {
        uiViewClassName: "Line",
        validAttributes: {
            ...ReactNativeViewAttributes.RCTView,
            intensity: true,
        }
    },
    getDefaultProps: function() {
        return {};
    },
    render: function() {
      return (
        <VRLine
          {...props}>
        </VRLine>
      );
    }
});
