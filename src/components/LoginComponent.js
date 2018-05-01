import React, { Component } from 'react';
import { View, TextInput, Button, Text, TouchableNativeFeedback } from 'react-native';

class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.redirectSignup = this.redirectSignup.bind(this);
    }
    redirectSignup(){
        this.props.navigation.push('Signup');
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <TextInput
                    placeholder="Enter your username"
                />
                <TextInput
                    placeholder="Enter your password"
                    secureTextEntry={true}
                />
                <Button
                    title="Login"
                    onPress={() => navigate('Dashboard')} />
                <TouchableNativeFeedback>
                    <Text onPress={this.redirectSignup}>Create an account</Text>
                    </TouchableNativeFeedback>
            </View>
        )
    }
}

export default LoginComponent;