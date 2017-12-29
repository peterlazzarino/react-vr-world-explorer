import * as ReactVR from 'react-vr-web';
import * as OVRUI from 'ovrui';
import * as THREE from 'three';
import merge from 'react-vr-web/js/Utils/merge';

class RCTLine extends ReactVR.RCTBaseView {
    constructor(guiSys) {
        super();
        var material = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 2 });
        var geometry = new THREE.Geometry();
        geometry.vertices = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)];
        geometry.verticesNeedUpdate = true;
        var line = new THREE.Line(geometry, material);
        this.view = new OVRUI.UIView(guiSys); 
        this.isAdded = false;

        Object.defineProperty(this.props, 'vertices', { 
            set: value => { 
                line.geometry.vertices[0] = new THREE.Vector3(value[0][0], value[0][1], value[0][2]);
                line.geometry.vertices[1] = new THREE.Vector3(value[1][0], value[1][1], value[1][2]);
                if(!this.isAdded){
                    this.view.add(line);                    
                }
            }, 
        });
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