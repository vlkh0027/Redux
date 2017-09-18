import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/Store'
import Main from './conponents/Main';

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
         <Main/>
        </Provider>
    );
  }
}


