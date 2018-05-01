import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Button, NavigatorIOS } from 'react-native';
import ListItem from './src/components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputStyle: {
    width: "70%"
  },
  buttonStyle: {
    width: "30%"
  },
  listContainer: {
    width: '100%'
  }
});

class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  buttonHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.setState((prevState) => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ''
      }
    })
  }

  placeNameHandler = (event) => {
    this.setState({
      placeName: event
    });
  }

  render() {

    const placesRender = this.state.places.map((element,index) => {
      return (<ListItem key={index} placeName={element} />);
    });

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            value={this.state.placeName}
            onChangeText={this.placeNameHandler}
          />
          <Button
            style={styles.buttonStyle}
            onPress={this.buttonHandler}
            title="Add"
          />
        </View>

        <View style={styles.listContainer}>
          {placesRender}
        </View>
      </View>
    );
  }
}

export default App;
