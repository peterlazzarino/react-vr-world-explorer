import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  Sphere,
  View,
} from 'react-vr';
import { Provider } from "react-redux";
import Earth from "./components/earth/earth";
import Nav from "./components/navigation/nav";
import store from "./redux/store";

export default class world_explorer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Pano source={asset('star_bg.jpg')}/>
          <Earth scale={1.5} />
          <Nav />
        </View>
      </Provider>
    );
  }
};

AppRegistry.registerComponent('world_explorer', () => world_explorer);
