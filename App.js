import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Button, NavigatorIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Routes from './src/routes/routes';

class App extends Component {
  render() {

    return (
      <Routes />
    );
  }
}

export default App;
