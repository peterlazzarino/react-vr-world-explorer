import * as ReactVR from 'react-vr-web';
import * as OVRUI from 'ovrui';
import * as THREE from 'three';
import merge from 'react-vr-web/js/Utils/merge';

class RCTLine extends ReactVR.RCTBaseView {
    constructor(guiSys) {
        super();
        var material = new THREE.LineBasicMaterial({ linewidth: 1 });
        var geometry = new THREE.Geometry();
        var line = new THREE.Line(geometry, material);
        this.view = new OVRUI.UIView(guiSys); 

        Object.defineProperty(this.props, 'vertices', { 
            set: value => { 
                value.map((vertex, id) => {
                    line.geometry.vertices[id] = new THREE.Vector3(value[id][0], value[id][1], value[id][2]);
                })
            }, 
        });

        Object.defineProperty(this.props, 'color', {
            set: value => {
                line.material.color = new THREE.Color(value);         
                line.material.needsUpdate = true;
            }
        });
    
        this.view.add(line);     
    }

    static describe() {
        return merge(super.describe(), {
            // declare the native props sent from react to runtime
            NativeProps: {
                vertices: 'array',
                color: 'string'
            },
        });
    }
}

export default RCTLine;