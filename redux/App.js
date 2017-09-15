import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Provider} from 'react-redux';
import Main from './components/Main';
import store from './Redux/Store';
export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
          <Main/>
      </Provider>
    );
  }
}


