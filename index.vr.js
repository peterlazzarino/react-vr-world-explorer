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
import VRLine from "./components/line/line";
import Earth from "./components/solar-system/earthContainer";
import Sun from "./components/sun/sun";
import Moon from "./components/moon/moon";
import BottomNav from "./components/navigation/bottom-nav";
import LeftNavigation from "./components/navigation/left-nav";
import store from "./redux/store";

export default class world_explorer extends React.Component {
  render() {
    const earthRadius = 1.5;
    return (
      <Provider store={store}>
        <View>
          <VRLine />
          <LeftNavigation />
          <BottomNav />         
          <Earth earthRadius={earthRadius} />
          <Pano source={asset('star_bg.jpg')}/> 
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
