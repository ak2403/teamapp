import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import LoginComponent from '../components/LoginComponent';
import DashboardComponent from '../components/DashboardComponent';
import SignupComponent from '../components/SignupComponent';

class Routes extends Component {
    render() {
        const RootStack = StackNavigator({
            Login: {
                screen: LoginComponent,
            },
            Dashboard: {
                screen: DashboardComponent
            },
            Signup: {
                screen: SignupComponent
            }
        }, {
                initialRouteName: 'Login',
            });

            return <RootStack />
    }
}

export default Routes;