import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  Sphere,
  View,
} from 'react-vr';

export default class world_explorer extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('star_bg.jpg')}/>
        <Sphere
          lit={false}
          wireframe={false}
          style={{
            transform: [{translate: [0, 0, -3]}],
          }}
          texture={asset("earth.jpg")}
          radius={1.5}
          widthSegments={15}
          heightSegments={15}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('world_explorer', () => world_explorer);
