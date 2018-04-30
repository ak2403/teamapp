import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  inputStyle: {
    width: '100%'
  }
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your user name"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.inputStyle}
          placeholder="Enter your user name"
        />
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button" />
      </View>
    );
  }
}

export default App;
