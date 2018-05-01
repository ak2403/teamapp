import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

class SignupComponent extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <TextInput
                    placeholder="Enter your username"
                />
                <TextInput
                    placeholder="Enter your email"
                />
                <TextInput
                    placeholder="Enter your password"
                    secureTextEntry={true}
                />
                <TextInput
                    placeholder="Confirm your password"
                    secureTextEntry={true}
                />
                <Button
                    title="SignUp"
                    onPress={() => navigate('Dashboard')} />
            </View>
        )
    }
}

export default SignupComponent;