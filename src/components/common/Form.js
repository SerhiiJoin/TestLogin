import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Form extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='transparent'
                    placeholder='Email'
                    placeholderTextColor='#ffffff'
                    onChangeText={text => this.props.onEmailChange(text)}
                    value={this.props.email}
                />
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='transparent'
                    placeholder='Password'
                    secureTextEntry
                    placeholderTextColor='#ffffff'
                    onChangeText={text => this.props.onPasswordChange(text)}
                    value={this.props.password}
                />
                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={this.props.toNumber}
                >
                    <Text style={styles.btnText}>{this.props.type}</Text>
                </TouchableOpacity>

            </View>
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
        paddingVertical: 12,
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
    }
});
