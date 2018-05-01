import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/reducers/index';

const AppStore = configureStore();

const ReduxApp = () => (
    <Provider store={AppStore}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('gameteam', () => ReduxApp);
