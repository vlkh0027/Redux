
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './redux/App';

export default class DemoRedux extends Component {
  render() {
    return (
      <App/>
    );
  }
}



AppRegistry.registerComponent('DemoRedux', () => DemoRedux);
