
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './redux/App';
import App2 from './redux2/App';
export default class DemoRedux extends Component {
  render() {
    return (
     <App2/>
    );
  }
}

AppRegistry.registerComponent('DemoRedux', () => DemoRedux);
