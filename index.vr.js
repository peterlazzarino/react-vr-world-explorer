import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  Sphere,
  View,
} from 'react-vr';
import Earth from "./components/earth/earth"

export default class world_explorer extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('star_bg.jpg')}/>
        <Earth scale={1.5} />
      </View>
    );
  }
};

AppRegistry.registerComponent('world_explorer', () => world_explorer);
