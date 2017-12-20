import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  DirectionalLight,
  Sphere,
  View,
} from 'react-vr';
import { Provider } from "react-redux";
import Earth from "./components/earth/earth";
import Sun from "./components/sun/sun";
import Moon from "./components/moon/moon";
import Nav from "./components/navigation/nav";
import store from "./redux/store";

export default class world_explorer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <View>
            <Pano source={asset('star_bg.jpg')}/>
            <Earth scale={1.5} lit={true}/>
            <Nav />
          </View>
          <View style={{
              position:"absolute",
              transform: [
                { translate: [-5, -5, -5]  }
              ]
          }}>
            <Moon />
          </View>
          <DirectionalLight intensity={20} style={{ transform: [{ rotateZ: -35 }] }}/>
          <View style={{
            position:"absolute",
            transform: [{translate: [-3, -7, -1]}],
          }}>
            <Sun />
          </View>
        </View>
      </Provider>
    );
  }
};

AppRegistry.registerComponent('world_explorer', () => world_explorer);
