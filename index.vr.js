import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  PointLight,
  AmbientLight,
  Sphere,
  View,
} from 'react-vr';
import { Provider } from "react-redux";
import Earth from "./components/earth/earth";
import Sun from "./components/sun/sun";
import Moon from "./components/moon/moon";
import LeftNavigation from "./components/navigation/left-nav";
import store from "./redux/store";

export default class world_explorer extends React.Component {
  render() {
    const earthRadius = 1.5;
    return (
      <Provider store={store}>
        <View>
          <LeftNavigation />
          <View style={{
              transform: [
                { translate: [0, -.2, -6]  }
              ]
          }}>
            <Pano source={asset('star_bg.jpg')}/>
            <Earth scale={earthRadius} />
            <Moon />
          </View>
          <View style={{
            position:"absolute",
            transform: [{translate: [-125, -20, 205]}],
          }}>
            <PointLight distance={10000} intensity={5.5} decay={100} />
            <AmbientLight intensity={.9} decay={100} />
            <Sun />
          </View>
        </View>
      </Provider>
    );
  }
};

AppRegistry.registerComponent('world_explorer', () => world_explorer);
