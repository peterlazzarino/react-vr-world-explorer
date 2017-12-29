import * as ReactVR from 'react-vr-web';
import * as OVRUI from 'ovrui';
import * as THREE from 'three';
import merge from 'react-vr-web/js/Utils/merge';

class RCTLine extends ReactVR.RCTBaseView {
    constructor(guiSys) {
        super();
        var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        var geometry = new THREE.Geometry();
        geometry.vertices = this.props.vertices;
        geometry.verticesNeedUpdate = true;
        var line = new THREE.Line(geometry, material);
        this.view = new OVRUI.UIView(guiSys);
        this.view.add(line);
    }

    static describe() {
        return merge(super.describe(), {
            // declare the native props sent from react to runtime
            NativeProps: {
                vertices: 'array',
            },
        });
    }
}

export default RCTLine;