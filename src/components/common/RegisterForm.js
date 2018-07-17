import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class RegisterForm extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    };
    finishRegister = () => {
        let user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        this.props.setUser(user);
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='transparent'
                    placeholder='Name'
                    placeholderTextColor='#ffffff'
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='transparent'
                    placeholder='Email'
                    placeholderTextColor='#ffffff'
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='transparent'
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor='#ffffff'
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <TouchableOpacity
                    onPress={this.finishRegister}
                    style={styles.btnLogin}
                >
                    <Text style={styles.btnText}>{this.props.type}</Text>
                </TouchableOpacity>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 25,
        paddingVertical: 10,
        fontSize: 16,
        marginVertical: 10,
        color: '#ffffff'
    },
    btnLogin: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        paddingVertical: 12,
        marginVertical: 10
    },
    btnText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    dropDown: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 25,
        paddingVertical: 12,
        marginVertical: 10,
    },
    dropDownItem: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)'
    },
    dropDownDefaultText: {
        color: '#555',
        fontSize: 16
    },
    dropDownText: {
        color: '#000',
        fontSize: 16
    }
});