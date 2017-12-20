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
import Moon from "./components/moon/moon";
import TopNavigation from "./components/navigation/top-nav";
import LeftNavigation from "./components/navigation/left-nav";
import store from "./redux/store";

export default class world_explorer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <LeftNavigation />
          <View style={{ 
              transform: [
                { translate: [0, 0, -6]  }
              ]
          }}>
            <Pano source={asset('star_bg.jpg')}/>
            <Earth scale={1.5} />
            <Moon />
          </View>
        </View>
      </Provider>
    );
  }
};

AppRegistry.registerComponent('world_explorer', () => world_explorer);
